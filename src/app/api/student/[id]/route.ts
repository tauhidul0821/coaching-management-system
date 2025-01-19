import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/users';
import connectDB from '@/config/database';

export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  try {
    await connectDB();

    const id = (await params).id;

    const deletedUser = await User.findOneAndDelete({ _id: id });

    return NextResponse.json({ message: 'Student Deleted', data: deletedUser }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'An error occurred while deleting student', error }, { status: 400 });
  }
};
