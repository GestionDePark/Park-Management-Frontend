import fetcher from '@/api/fetcher.ts';
import { SignupData, UserData } from '@/services/auth/types.ts';
import getAuthorization from '@/utils/getAuthorization.ts';

class User {
  public static async findSelf(): Promise<UserData> {
    return (
      await fetcher.get('/user/self', {
        headers: getAuthorization(),
      })
    ).data;
  }

  public static async findById(id: string): Promise<UserData> {
    return (
      await fetcher.get(`/user/${encodeURIComponent(id)}`, {
        headers: getAuthorization(),
      })
    ).data;
  }

  public static async createUser(data: SignupData): Promise<UserData> {
    return await fetcher.post('/user', data, {
      headers: getAuthorization(),
    });
  }

  public static async findAll(): Promise<UserData[]> {
    return (
      await fetcher.get('/user', {
        headers: getAuthorization(),
      })
    ).data;
  }
}

export default User;
