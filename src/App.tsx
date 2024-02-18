import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import muiTheme from '@/core/muiTheme';
import pageRoutes from '@/pageRoutes';
import Dashboard from '@/pages/Admin/Dashboard';
import EmployeeAdmin from '@/pages/Admin/Employee';
import Jobs from '@/pages/Admin/Jobs';
import Visitor from './pages/Visitor';
import SecureRoute from '@/layer/SecureRoute';
import { PageNotFound } from '@/layer/PageNotFound';
import { Employee as EmployeePage } from '@/pages/Employee';
import { Profile } from '@/pages/Profile';
import { Login } from '@/pages/Login';

const App = () => {
  return (
    <ThemeProvider theme={muiTheme('light')}>
      <BrowserRouter>
        <Routes>
          <Route path={pageRoutes.home} Component={Visitor} />
          <Route path={pageRoutes.profile} Component={SecureRoute(Profile)} />

          <Route
            path={pageRoutes.adminDashboard}
            Component={SecureRoute(Dashboard, ['admin'])}
          />
          <Route
            path={pageRoutes.adminEmployee}
            Component={SecureRoute(EmployeeAdmin, ['admin'])}
          />
          <Route
            path={pageRoutes.adminJobs}
            Component={SecureRoute(Jobs, ['admin'])}
          />
          <Route
            path={pageRoutes.employeePage}
            Component={SecureRoute(EmployeePage, ['user'])}
          />

          <Route path={pageRoutes.login} Component={Login} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
