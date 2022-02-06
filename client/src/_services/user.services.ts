import { UserType } from 'store/user/types';
import { client } from '_api';

export class UserApiHandler {
  instance = null;

  login(email: string, password: string) {
    const login = { email, password };
    return client('login', login);
  }

  register(user: UserType) {
    return client('user/register', user);
  }

  logout() {
    localStorage.removeItem('Token');
  }
}
