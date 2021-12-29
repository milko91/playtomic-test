import { getFromSessionStorage, USER_STORAGE_KEY } from '../../common/utils/storage';

export interface IUser {
  username: string;
  accessToken: string;
}

export interface ISecurityManagementState {
  user: IUser | null;
}

export const initialState: ISecurityManagementState = {
  user: getFromSessionStorage(USER_STORAGE_KEY),
};
