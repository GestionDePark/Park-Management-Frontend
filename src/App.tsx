import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import muiTheme from '@/core/muiTheme';
import pageRoutes from '@/pageRoutes';
import Dashboard from '@/pages/Admin/Dashboard';
import Employee from '@/pages/Admin/Employee';
import { Login } from '@/pages/Login';
import Jobs from '@/pages/Admin/Jobs';
import Path from './pages/Visitor/Path';
import ProtectRoutes from '@/layer/ProtectRoutes';

const App = () => {
  return (
    <ThemeProvider theme={muiTheme('light')}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectRoutes
                navigationFailedAuth={pageRoutes.login}
                hasOneRole={['admin']}
              />
            }
          >
            <Route path={pageRoutes.adminDashboard} Component={Dashboard} />
            <Route path={pageRoutes.adminEmployee} Component={Employee} />
          </Route>

          <Route path={pageRoutes.adminJobs} Component={Jobs} />
          <Route path={pageRoutes.login} Component={Login} />
          <Route path={pageRoutes.home} Component={Path} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
