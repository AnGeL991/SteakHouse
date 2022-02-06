export enum UserActionType {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  USER_LOADING = 'USER_LOADING',
  LOGOUT = 'LOGOUT',
  USER_ORDERS = 'USER_ORDERS',
}

export interface UserType {
  email: string;
  password: string;
  id?: string;
  firstName?: string;
  lastName?: string;
  contact?: string;
  adress?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface UserState {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  data: UserType;
}
