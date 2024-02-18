import { PropsWithChildren } from 'react';
import Header from '@/components/Header';
import Aside from '@/pages/Admin/Dashy/Aside';

const Dashy = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />

      <div className="h-full flex overflow-x-hidden">
        <Aside />

        <div className="w-full px-2 flex-shrink">{children}</div>
      </div>
    </div>
  );
};

export default Dashy;
