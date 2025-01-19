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

function generateSixDigitNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

const sixDigitNumber = generateSixDigitNumber();
console.log(sixDigitNumber);

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();

    const { name, email } = await req.json();

    const temporaryPassword = Math.floor(100000 + Math.random() * 900000);

    const payload = {
      name,
      email,
      password: temporaryPassword.toString(),
      role: 'student',
    };

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
