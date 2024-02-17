import AppLogo from '@/components/AppLogo';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';

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

  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <header
      className={`w-full flex justify-between p-2 fixed top-0 transition right-0 z-[1000] ${changeHeader ? 'bg-white' : ''}`}
    >
      <AppLogo />

      <Tabs
        value={value}
        role="navigation"
        onChange={handleChange}
        aria-label="nav tabs example"
      >
        <LinkTab scrolled={changeHeader} label="About us" href="#about" />
        <LinkTab scrolled={changeHeader} label="Visit" href="#visit" />
        <LinkTab scrolled={changeHeader} label="Employee" href="#employee" />
      </Tabs>
    </header>
  );
};

interface LinkTabProps {
  scrolled: boolean;
  label?: string;
  href?: string;
  selected?: boolean;
}

const LinkTab = ({ scrolled, ...rest }: LinkTabProps) => {
  return (
    <Tab
      component="a"
      sx={{ color: scrolled ? 'black' : 'white' }}
      aria-current={rest.selected && 'page'}
      {...rest}
    />
  );
};

export { Header };
