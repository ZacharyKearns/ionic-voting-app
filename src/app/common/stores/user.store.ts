import { User } from '../models/user.model';

export interface UserError {
  error: boolean;
  message: string;
}

export interface UserState {
  user: User;
  status: string;
  error: UserError;
}

const initialState: UserState = {
  user: null,
  status: null,
  error: null
}

export const user = (state: UserState = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, { user: payload.user });
    case 'LOGIN_ERROR':
      return Object.assign({}, state, { error: payload });
    case 'RESET_LOGIN_ERROR':
      return Object.assign({}, state, { error: null });
    default:
      return state;
  }
};
