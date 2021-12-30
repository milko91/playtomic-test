import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../../base';
import { useSecurityManagementDispatch, useSetUserAction } from '../../../security-management/state/actions';
import { setToSessionStorage, USER_STORAGE_KEY } from '../../../common/utils/storage';
import { validationSchema } from '../../../common/validationSchema';

interface Values {
  email: string;
  password: string;
}

const initialValues: Values = {
  email: '',
  password: '',
};

export const Login: FC = () => {
  const dispatch = useSecurityManagementDispatch();
  const dispatchSetUser = useSetUserAction(dispatch);
  const navigate = useNavigate();

  const handleLogin = async (values: Values, submittingObject: FormikHelpers<Values>) => {
    try {
      const user = await signInWithEmailAndPassword(auth, values.email, values.password);
      const token = await user.user.getIdToken();
      const userData = { username: user.user.email as string, accessToken: token };
      dispatchSetUser(userData);
      setToSessionStorage(USER_STORAGE_KEY, userData);
      navigate('/dashboard');
    } catch (error) {
      // show notification
      alert('Wrong credentials');
    } finally {
      submittingObject.resetForm();
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container__title">Sign in</div>
        <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}>
          {(formikProps) => (
            <Form className="login-container__form">
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage className="error-message" name="email" component="div" />
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage className="error-message" name="password" component="div" />
              <button
                className="login-container__button"
                type="submit"
                disabled={!formikProps.isValid || formikProps.isSubmitting}
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
