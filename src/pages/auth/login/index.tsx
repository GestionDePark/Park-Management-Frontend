import { Typography } from '@mui/material';
import FormLogin from '@/pages/auth/login/FormLogin.tsx';

const Login = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-full flex-shrink"></div>

      <div className="flex h-full w-full py-8">
        <div className="p-8 flex flex-col gap-12 h-full">
          <div className="center-flex flex-col">
            <Typography variant="h3">Welcome back !</Typography>
            <span className="text-xl">Discover our amazing park</span>
          </div>
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
