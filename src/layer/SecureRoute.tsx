import PageLoading from '@/components/PageLoading';
import { AvailableRole } from '@/services/auth/types';
import useSecure from '@/hooks/useSecure';
import { useNavigate } from 'react-router-dom';
import pageRoutes from '@/pageRoutes';

interface Options {
  navigation?: string;
}

/**
 * A user should be authenticated or/and authorized following the auth method
 * @param Component
 * @param authorizedRole
 * @param options
 * @constructor
 */
const SecureRoute = (
  Component: null | (() => JSX.Element),
  authorizedRole?: AvailableRole[],
  options?: Options,
) => {
  const SecureComponent = () => {
    const nav = useNavigate();
    const { isLoading, canAccess, errorNode } = useSecure(authorizedRole);
    if (!canAccess) nav(options?.navigation || pageRoutes.login);
    return (
      <>
        {isLoading ? (
          <PageLoading />
        ) : Component === null ? null : canAccess ? (
          <Component />
        ) : null}
        {errorNode}
      </>
    );
  };

  return () => <SecureComponent />;
};

export default SecureRoute;
