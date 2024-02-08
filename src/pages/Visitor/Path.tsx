import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './Container/Container';
import NavLi from './Navlink';

const Path: React.FC = () => {
  return (
    <BrowserRouter>
      <NavLi />
      <Route path="/">
        <Container />
      </Route>
      <Route path="/about">
        <Container />
      </Route>
      <Route path="/contact">
        <Container />
      </Route>
    </BrowserRouter>
  );
};
export default Path;
