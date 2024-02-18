import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { UserData } from '@/services/auth/types';
import UserProvider from '@/api/providers/UserProvider';
import useErrorPopup from '@/hooks/useErrorPopup';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';

const Employee = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [errorNode, setErrorNode] = useErrorPopup();

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      UserProvider.findSelf().then(setCurrentUser).catch(setErrorNode);
    }
  });

  return (
    <div className="w-full">
      <Header className="fixed top-0 w-full flex justify-between p-2 z-[1000] bg-white" />
      <div
        className="flex w-full gap-4 mt-[3.69rem] relative"
        style={{ height: 'calc(100vh - 3.69rem)' }}
      >
        <AsideLeft user={currentUser} />
        <div className="w-full"></div>
        <AsideRight />
      </div>
      {errorNode}
    </div>
  );
};

export { Employee };
