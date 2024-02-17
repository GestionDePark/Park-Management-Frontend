import { AvailableRole } from '@/services/auth/types';
import { useEffect, useState } from 'react';
import Auth from '@/services/auth';
import { useNavigate } from 'react-router-dom';
import pageRoutes from '@/pageRoutes';

interface Options {
  notAuthenticatedRedirect?: string;
  notAuthorizedRedirect?: string;
}

const useSecure = (hasOneRole?: AvailableRole[], options?: Options) => {
  const nav = useNavigate();
  const [renderFirst, setRenderFirst] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [canAccess, setCanAccess] = useState(false);

  const checkError = (e: Error) => {
    if (e.message === 'not_authenticated') {
      nav(options?.notAuthenticatedRedirect || pageRoutes.login);
    } else if (e.message === 'not_authorized') {
      nav(
        options?.notAuthenticatedRedirect ||
          options?.notAuthenticatedRedirect ||
          pageRoutes.login,
      );
    }
  };

  useEffect(() => {
    if (isLoading && renderFirst) {
      setRenderFirst(false);
      trySecure(hasOneRole)
        .then((accessible: boolean) => {
          setCanAccess(accessible);
          setIsLoading(false);
        })
        .catch(checkError);
    }
  });

  return { isLoading, canAccess };
};

const trySecure = async (hasOneRole?: AvailableRole[]) => {
  const authenticated: boolean = await Auth.AuthenticationMethod();
  if (!hasOneRole) {
    if (authenticated) {
      return true;
    }
    throw new Error('not_authenticated');
  }
  const canAccess: boolean = await Auth.AuthorizationMethod(hasOneRole);
  if (!(authenticated || canAccess)) {
    throw new Error('not_authorized');
  }
  return authenticated && canAccess;
};

export default useSecure;
