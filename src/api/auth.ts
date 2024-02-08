import { LoginData, LoginResponse } from '@/services/auth/types.ts';
import fetcher from '@/api/fetcher.ts';

const getToken = async (data: LoginData): Promise<LoginResponse> => {
  return (await fetcher.post('/auth/token', data)).data;
};

export default getToken;
