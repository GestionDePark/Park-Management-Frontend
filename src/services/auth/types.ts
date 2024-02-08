type AvailableRole = 'admin' | 'user';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

interface UserData extends Omit<SignupData, 'password'> {
  id: string;
}

export {
  type LoginData,
  type SignupData,
  type AvailableRole,
  type UserData,
  type LoginResponse,
};
