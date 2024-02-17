import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import pageRoutes from '@/pageRoutes';
import { useForm } from 'react-hook-form';
import { LoginData } from '@/services/auth/types';
import useErrorPopup from '@/hooks/useErrorPopup';
import Auth from '@/services/auth';
import storage from '@/core/storage';

const FormLogin = () => {
  const nav = useNavigate();
  const { handleSubmit, register } = useForm<LoginData>();
  const [nodeError, setErrorNode] = useErrorPopup();

  const handleLogin = async (data: LoginData) => {
    try {
      const response = await Auth.login(data);
      storage.local.set('user_token', response.token);
      const v = await Auth.getCurrentUser();
      if (v) {
        if (v?.isAdmin) {
          nav(pageRoutes.adminDashboard);
        } else {
          nav(pageRoutes.employeePage);
        }
      }
    } catch (e) {
      setErrorNode(e as Error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-8">
      <TextField
        required
        fullWidth
        {...register('email')}
        label="Email"
        variant="filled"
      />

      <TextField
        required
        fullWidth
        {...register('password')}
        label="Password"
        type="password"
        variant="filled"
        autoComplete="current-password"
      />

      <div className="flex items-center justify-between">
        <Button type="submit" variant="contained">
          Submit
        </Button>

        <span className="center-flex gap-2">
          <span>Don't have a account ?</span>
          <Link to={pageRoutes.signup} className="font-bold hover:underline">
            Signup
          </Link>
        </span>
      </div>
      {nodeError}
    </form>
  );
};

export default FormLogin;
