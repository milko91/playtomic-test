import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../../base';
import { useSecurityManagementDispatch, useSetUserAction } from '../../../security-management/state/actions';
import { setToSessionStorage, USER_STORAGE_KEY } from '../../../common/utils/storage';

export const Login: FC = () => {
  const dispatch = useSecurityManagementDispatch();
  const dispatchSetUser = useSetUserAction(dispatch);
  const navigate = useNavigate();

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const token = await user.user.getIdToken();
      const userData = { username: user.user.email as string, accessToken: token };
      dispatchSetUser(userData);
      setToSessionStorage(USER_STORAGE_KEY, userData);
      navigate('/dashboard');
    } catch (error) {
      // show notification
    }
  };

  // TODO add form validation, Formik maybe
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container__title">Sign in</div>
        <form onSubmit={handleLogin} className="login-container__form">
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button className="login-container__button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
