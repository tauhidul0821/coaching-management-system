import { NextRequest, NextResponse } from 'next/server';
import User from '../../models/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 400 });
    }

    // create token data
    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    // CREATE TOKEN
    const token = await jwt.sign(tokenData, process.env.NEXTAUTH_SECRET as string, { expiresIn: '1d' });

    const response = NextResponse.json({
      message: 'User logged in',
      success: true,
    });

    response.cookies.set('token', token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: 'An error occurred while login the user', error }, { status: 500 });
  }
}
