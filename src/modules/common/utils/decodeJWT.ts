import jwt from 'jwt-decode';

export interface IDecodedToken {
  aud: string;
  auth_time: number;
  email: string;
  email_verified: false;
  exp: number;
  firebase: Record<string, unknown>;
  iat: number;
  iss: string;
  name: string;
  sub: string;
  user_id: string;
}

export const decodeDisplayNameFromJWT = (token: string): string => {
  const decoded: IDecodedToken = jwt(token);

  return decoded && decoded.name ? decoded.name : '';
};
