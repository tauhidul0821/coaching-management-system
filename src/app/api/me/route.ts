import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/utilities/getDataFromToken';
import User from '@/models/users';
import connectDB from '@/config/database';

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();
    const userId = await getDataFromToken(req);

    const user = await User.findById(userId).select('-password -updatedAt -createdAt');
    return NextResponse.json({ message: 'User ', data: user });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'An error occurred while logout the user', error }, { status: 400 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const { name, email } = await req.json();

    // check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const userId = await getDataFromToken(req);

    const updatedUser = await User.updateOne({ _id: userId }, { $set: { name, email } });

    return NextResponse.json({ message: 'User Updated', data: updatedUser }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'An error occurred while logout the user', error }, { status: 400 });
  }
};
