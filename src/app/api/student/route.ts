import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
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

// export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
//   try {
//     await connectDB();

//     const id = (await params).id;

//     const deletedUser = await User.findOneAndDelete(id);

//     return NextResponse.json({ message: 'Student Deleted', data: deletedUser }, { status: 200 });
//   } catch (error: unknown) {
//     return NextResponse.json({ message: 'An error occurred while deleting student', error }, { status: 400 });
//   }
// };

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();

    const { name, email, grade, subject } = await req.json();

    const temporaryPassword = Math.floor(100000 + Math.random() * 900000);

    const hashedPassword = await bcrypt.hash(temporaryPassword.toString(), 10);

    const payload = {
      name,
      email,
      password: hashedPassword,
      role: 'student',
      grade,
      subject,
    };
    console.log('before server call payload :- ', payload);

    // check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    await User.create(payload);

    return NextResponse.json({ message: 'New Student Account Created' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'An error occurred while signup the user', error }, { status: 500 });
  }
};
