import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import muiTheme from '@/core/muiTheme';
import pageRoutes from '@/pageRoutes';
import Dashboard from '@/pages/Admin/Dashboard';
import Employee from '@/pages/Admin/Employee';
import Jobs from '@/pages/Admin/Jobs';
import Visitor from './pages/Visitor';
import Login from '@/pages/auth/login';
import SecureRoute from '@/layer/SecureRoute';

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

          <Route path={pageRoutes.adminJobs} Component={Jobs} />
          <Route path={pageRoutes.login} Component={Login} />
          <Route path={pageRoutes.home} Component={Visitor} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
