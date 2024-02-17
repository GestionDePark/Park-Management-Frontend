import fetcher from '@/api/fetcher';
import { SignupData, UserData } from '@/services/auth/types';
import getAuthorization from '@/utils/getAuthorization';

class UserProvider {
  public static async findSelf(): Promise<UserData> {
    return (
      await fetcher.get('/user/self', {
        headers: getAuthorization(),
      })
    ).data;
  }

  public static async findAll(): Promise<UserData[]> {
    return (
      await fetcher.get('/user', {
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
    return (
      await fetcher.post('/user', data, {
        headers: getAuthorization(),
      })
    ).data;
  }

  public static async update(id: string, data: SignupData): Promise<UserData> {
    return (
      await fetcher.patch(`/user/${encodeURIComponent(id)}`, data, {
        headers: getAuthorization(),
      })
    ).data;
  }

  public static async delete(id: string): Promise<UserData> {
    return (
      await fetcher.delete(`/user/${encodeURIComponent(id)}`, {
        headers: getAuthorization(),
      })
    ).data;
  }
}

export default UserProvider;
