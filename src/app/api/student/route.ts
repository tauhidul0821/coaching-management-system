import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/users';
import connectDB from '@/config/database';

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();

    const user = await User.find({ role: 'student' }).select('-password -updatedAt -createdAt');
    return NextResponse.json({ message: 'All Students', data: user }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'An error occurred while get students', error }, { status: 400 });
  }
};
