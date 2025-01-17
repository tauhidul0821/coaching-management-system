import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/utilities/getDataFromToken';
import User from '@/models/users';
import connectDB from '@/config/database';

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();
    const userId = await getDataFromToken(req);

    const user = await User.findById({ _id: userId }).select('-password -updatedAt -createdAt');
    return NextResponse.json({ message: 'User ', data: user });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'An error occurred while logout the user', error }, { status: 400 });
  }
};
