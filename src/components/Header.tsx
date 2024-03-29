import AppLogo from '@/components/AppLogo';
import { Link } from 'react-router-dom';
import pageRoutes from '@/pageRoutes';
import { Avatar, Skeleton } from '@mui/material';
import Auth from '@/services/auth';
import { useEffect, useState } from 'react';
import { UserData } from '@/services/auth/types';
import useErrorPopup from '@/hooks/useErrorPopup';

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [errorNode, setErrorNode] = useErrorPopup();

  useEffect(() => {
    if (currentUser === null && !errorNode) {
      Auth.getCurrentUser()
        .then((user) => setCurrentUser(user as UserData))
        .catch(setErrorNode);
    }
  });

  return (
    <header className={className || 'flex justify-between p-2'}>
      <AppLogo />

      <Link to={pageRoutes.profile} className="center-flex gap-2">
        <div className="flex flex-col text-end">
          <span className="leading-tight text-lg font-bold">
            {currentUser?.lastName || <Skeleton />}
          </span>
          <span className="leading-tight">
            {currentUser?.email || <Skeleton />}
          </span>
        </div>
        <Avatar>{currentUser?.email?.charAt(0).toUpperCase()}</Avatar>
      </Link>
      {errorNode}
    </header>
  );
};

export default Header;
