import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/users';
import connectDB from '@/config/database';

export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  try {
    await connectDB();

    const id = (await params).id;

    const user = await User.findOne({ _id: id }).select('-password -updatedAt -__v -createdAt');

    return NextResponse.json({ message: 'Student Deleted', data: user }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'An error occurred while get student data', error }, { status: 400 });
  }
};

export const PUT = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  try {
    await connectDB();
    const { name, email, grade, subject } = await req.json();

    const id = (await params).id;

    const user = await User.findOneAndUpdate({ _id: id }, { name, email, grade, subject });

    return NextResponse.json({ message: 'Student updated', data: user }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'An error occurred while get student data', error }, { status: 400 });
  }
};

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
