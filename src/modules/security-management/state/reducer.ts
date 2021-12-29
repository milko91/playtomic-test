import { SecurityManagementAction, SecurityManagementActions } from './actions';
import { ISecurityManagementState, initialState } from './state';

export const securityManagement = (
  state: ISecurityManagementState = initialState,
  action: SecurityManagementAction
): ISecurityManagementState => {
  switch (action.type) {
    case SecurityManagementActions.SM_SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
