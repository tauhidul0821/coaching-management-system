import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/users';
import connectDB from '@/config/database';

export const GET = async (req: NextRequest, route: { params: { id: string } }) => {
  // , route: { params: { id: string } }
  try {
    await connectDB();
    const id: number = Number(route.params.id);
    console.log(id);

    // const user = await User.findById(id).select('-password -updatedAt -createdAt');
    return NextResponse.json({ message: 'All Students', data: 'user' }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'An error occurred while get students', error }, { status: 400 });
  }
};
