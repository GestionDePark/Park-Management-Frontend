import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import pageRoutes from '@/pageRoutes.ts';
import { useForm } from 'react-hook-form';
import { LoginData } from '@/services/auth/types.ts';
import useErrorPopup from '@/hooks/useErrorPopup.tsx';
import Auth from '@/services/auth';

const FormLogin = () => {
  const nav = useNavigate();
  const { handleSubmit, register } = useForm<LoginData>();
  const [nodeError, setErrorNode] = useErrorPopup();

  const handleLogin = async (data: LoginData) => {
    try {
      await Auth.login(data);
      nav(pageRoutes.home);
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
