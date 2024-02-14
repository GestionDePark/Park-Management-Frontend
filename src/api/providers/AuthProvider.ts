import fetcher from '@/api/fetcher.ts';
import { LoginData, LoginResponse } from '@/services/auth/types.ts';

class AuthProvider {
  public static async getToken(data: LoginData): Promise<LoginResponse> {
    return (await fetcher.post('/auth/token', data)).data;
  }
  public static async createAccount() {}
}

export default AuthProvider;
