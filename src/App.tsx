import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import muiTheme from '@/core/muiTheme';
import pageRoutes from '@/pageRoutes';
import Dashboard from '@/pages/Admin/Dashboard';
import Employee from '@/pages/Admin/Employee';
import SecureRoute from '@/layer/SecureRoute';
import { Login } from '@/pages/Login';
import Jobs from '@/pages/Admin/Jobs';
import Path from './pages/Visitor/Path';

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
          <Route path={pageRoutes.home} Component={Path} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
