// create course
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/users';
import StudentCourses from '@/models/studentCourses';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/config/database';

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();
  } catch (error: any) {
    return NextResponse.json({ message: 'An error occurred while get studentCourses', error }, { status: 500 });
  }
};
