import { LoginData } from '@/pages/Login/loginFormData';
import fetcher from './fetcher.ts';

async function login(credentials: LoginData): Promise<boolean> {
  const token = await fetcher.post('/auth/token',credentials);
  return token.data.token;
}

export const api = {
  login
}