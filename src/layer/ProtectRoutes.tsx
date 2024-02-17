import { Navigate, Outlet } from 'react-router-dom';
import useSecure from '@/hooks/useSecure';
import { AvailableRole } from '@/services/auth/types';
import { createPortal } from 'react-dom';
import PageLoading from '@/components/PageLoading';

interface Props {
  navigationFailedAuth: string;
  hasOneRole?: AvailableRole[];
}

const ProtectRoutes = ({ hasOneRole, navigationFailedAuth }: Props) => {
  const { isLoading, canAccess } = useSecure(hasOneRole);
  if (isLoading)
    createPortal(<PageLoading />, document.getElementById('root')!);
  return canAccess ? <Outlet /> : <Navigate to={navigationFailedAuth} />;
};

export default ProtectRoutes;
