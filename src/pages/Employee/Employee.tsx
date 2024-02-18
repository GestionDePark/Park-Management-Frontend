import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { UserData } from '@/services/auth/types';
import UserProvider from '@/api/providers/UserProvider';
import useErrorPopup from '@/hooks/useErrorPopup';

const Employee = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [errorNode, setErrorNode] = useErrorPopup();
  const [currentUser, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      UserProvider.findSelf().then(setUser).catch(setErrorNode);
    }
  });

  return (
    <div>
      <Header />
      {errorNode}
    </div>
  );
};

export { Employee };
