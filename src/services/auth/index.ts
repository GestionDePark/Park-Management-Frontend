import {
  AvailableRole,
  LoginData,
  LoginResponse,
  SignupData,
  UserData,
} from './types';
import storage from '@/core/storage';
import AuthProvider from '@/api/providers/AuthProvider';
import User from '@/api/providers/UserProvider';
import Exception from './Exception';

class Auth {
  private static currentUser: UserData | undefined;

  public static async getCurrentUser(): Promise<UserData | undefined> {
    return this.currentUser || User.findSelf();
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
    const res: LoginResponse = await AuthProvider.getToken(data);
    storage.local.set('user_token', res.token);
    this.currentUser = await User.findSelf();
    return res;
  }

  public static async signup(data: SignupData) {
    return User.createUser(data);
  }

  public static logout() {
    storage.local.remove('user_token');
  }
}

export default Auth;
