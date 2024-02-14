import fetcher from '@/api/fetcher';
import { LoginData, LoginResponse } from '@/services/auth/types';

class AuthProvider {
  public static async getToken(data: LoginData): Promise<LoginResponse> {
    return (await fetcher.post('/auth/token', data)).data;
  }
  public static async createAccount() {}
}

export default AuthProvider;
