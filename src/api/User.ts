import fetcher from '@/api/fetcher.ts';
import { SignupData, UserData } from '@/services/auth/types.ts';

class User {
  public static async findOne(token: string): Promise<UserData> {
    return (
      await fetcher.get('/user/self', {
        headers: { Authorization: 'Bearer ' + token },
      })
    ).data;
  }

  public static async createUser(
    data: SignupData,
    adminToken: string,
  ): Promise<UserData> {
    return await fetcher.post('/user', data, {
      headers: { Authorization: 'Bearer ' + adminToken },
    });
  }
}

export default User;
