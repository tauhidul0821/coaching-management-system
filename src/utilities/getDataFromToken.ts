import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get('token')?.value || '';

    if (!token) {
      throw new Error('No token found in the request');
    }

    const decodedToken: any = jwt.verify(token, process.env.NEXTAUTH_SECRET as string);

    return decodedToken.id;
  } catch (error: any) {
    throw new Error('An error occurred while decoding the token', error.message);
  }
};
