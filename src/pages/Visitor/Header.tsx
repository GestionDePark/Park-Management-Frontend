import AppLogo from '@/components/AppLogo';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);

  const handleScroll = () => {
    const offset: number = window.scrollY - 3;
    setChangeHeader(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      return window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header
      className={`w-full flex justify-between p-2 fixed top-0 transition right-0 z-[1000] ${changeHeader ? 'bg-white' : ''}`}
    >
      <AppLogo />

      <nav
        className={`center-flex gap-2 px-3 ${changeHeader ? 'text-black' : 'text-white'}`}
      >
        <SpaLink href="#about">About us</SpaLink>
        <SpaLink href="#visit">Visit</SpaLink>
        <SpaLink href="#employee">Employee</SpaLink>
      </nav>
    </header>
  );
};

const SpaLink = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  const hash: string = useLocation().hash;
  const isActive: boolean = hash === href;

  return (
    <Button
      href={href}
      className="px-2 py-1"
      variant={isActive ? 'outlined' : 'text'}
    >
      {children}
    </Button>
  );
};

export { Header };
