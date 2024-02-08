import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import muiTheme from '@/core/muiTheme.ts';
import pageRoutes from '@/pageRoutes.ts';
import Dashboard from '@/pages/Admin/Dashboard';
import Employee from '@/pages/Admin/Employee';
import SecureRoute from '@/layer/SecureRoute.tsx';
import Login from '@/pages/auth/login';

const App = () => {
  return (
    <ThemeProvider theme={muiTheme('light')}>
      <BrowserRouter>
        <Routes>
          <Route
            path={pageRoutes.adminDashboard}
            Component={SecureRoute(Dashboard, ['admin'])}
          />
          <Route
            path={pageRoutes.adminEmployee}
            Component={SecureRoute(Employee, ['admin'])}
          />
          <Route path={pageRoutes.login} Component={Login} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
