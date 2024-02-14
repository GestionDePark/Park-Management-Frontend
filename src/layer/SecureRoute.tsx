import { useEffect, useRef, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import PageLoading from '@/components/PageLoading';
import pageRoutes from '@/pageRoutes';
import Auth from '@/services/auth';
import useErrorPopup from '@/hooks/useErrorPopup';
import { AvailableRole } from '@/services/auth/types';

/**
 * A user should be authenticated or/and authorized following the auth method
 * @param Component
 * @param authorizedRole
 * @constructor
 */
const SecureRoute = (
  Component: null | (() => JSX.Element),
  authorizedRole?: AvailableRole[],
) => {
  const [nodeError, setError] = useErrorPopup();

  const SecureComponent = () => {
    const nav: NavigateFunction = useNavigate();
    const mountIncr = useRef(0);
    const [isLoading, setLoading] = useState(true);

    const CannotAccess = () => {
      nav(pageRoutes.login);
    };

    useEffect(() => {
      if (isLoading) {
        Auth.AuthenticationMethod()
          .then(async (authenticated) => {
            if (authenticated) {
              if (authorizedRole !== undefined && authorizedRole.length > 0) {
                const passed: boolean =
                  await Auth.AuthorizationMethod(authorizedRole);
                if (passed && authenticated) {
                  setLoading(false);
                } else {
                  CannotAccess();
                }
              } else {
                setLoading(false);
              }
            } else {
              CannotAccess();
            }
            return authenticated;
          })
          .catch((e: Error) => {
            if (mountIncr.current === 1) {
              setError(e);
              const t = setTimeout(() => {
                nav(pageRoutes.home);
                clearTimeout(t);
              }, 2000);
            }
            if (mountIncr.current < 2) {
              mountIncr.current++;
            }
          });
      }
    });

    return (
      <>
        {isLoading ? (
          <PageLoading />
        ) : Component === null ? null : (
          <Component />
        )}
        {nodeError}
      </>
    );
  };

  return () => <SecureComponent />;
};

export default SecureRoute;
