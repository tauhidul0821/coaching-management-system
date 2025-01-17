import jwtDecode from 'jsonwebtoken';

interface Users {
  name: string;
  email: string;
  role: string;
}

export const decodeToken = (token: string) => {
  try {
    return jwtDecode.decode(token) as Users;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};
