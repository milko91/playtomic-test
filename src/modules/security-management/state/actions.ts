import { Dispatch, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Action } from '../../store';
import { IUser } from './state';

export enum SecurityManagementActions {
  SM_SET_USER = 'SM_SET_USER',
  SM_SET_ACTIVE_TENANT = 'SM_SET_ACTIVE_TENANT',
}

type SetUser = Action<SecurityManagementActions.SM_SET_USER, IUser | null>;

export type SecurityManagementAction = SetUser;

export const useSecurityManagementDispatch = (): Dispatch<SecurityManagementAction> => {
  return useDispatch<Dispatch<SecurityManagementAction>>();
};

export const useSetUserAction = (dispatch: Dispatch<SecurityManagementAction>) =>
  useCallback(
    (user: IUser | null): void => {
      dispatch({
        type: SecurityManagementActions.SM_SET_USER,
        payload: user,
      });
    },
    [dispatch]
  );
