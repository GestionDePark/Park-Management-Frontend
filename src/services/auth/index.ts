import {
  AvailableRole,
  LoginData,
  LoginResponse,
  SignupData,
  UserData,
} from './types';
import storage from '@/core/storage';
import getToken from '@/api/auth.ts';
import Exception from './Exception';
import User from '@/api/User.ts';

class Auth {
  private static currentUser: UserData | undefined;

  public static async getCurrentUser(): Promise<UserData | undefined> {
    return this.currentUser || User.findOne(storage.local.get('user_token'));
  }

  public static async AuthenticationMethod(): Promise<boolean> {
    const lastUser: UserData = (await this.getCurrentUser())!;
    if (lastUser === null || lastUser === undefined) {
      throw new Exception({
        message: 'You should login',
        status: 401,
      });
    }
    return true;
  }

  public static async AuthorizationMethod(
    inputRoles: AvailableRole[],
  ): Promise<boolean> {
    const role: AvailableRole = (await this.getCurrentUser())?.isAdmin
      ? 'admin'
      : 'user';
    if (role === undefined) return false;
    return inputRoles.includes(role);
  }

  public static async login(data: LoginData): Promise<LoginResponse> {
    const res: LoginResponse = await getToken(data);
    this.currentUser = await User.findOne(res.token);
    storage.local.set('user_token', res.token);
    return res;
  }

  public static async signup(data: SignupData, adminToken: string) {
    return User.createUser(data, adminToken);
  }

  public static logout() {
    storage.local.remove('user_token');
  }
}

export default Auth;
