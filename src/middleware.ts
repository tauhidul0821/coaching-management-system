import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decodeToken } from './utilities/decodeToken';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/login' || path === '/signup' || path === '/';

  const token = request.cookies.get('token')?.value || '';
  const decodedToken = decodeToken(token);
  console.log('decodedToken:', decodedToken);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl).toString());
  }

  // Only For Teacher
  if (path === '/dashboard/teachers/allCourses') {
    console.log('I am teacher');

    if (decodedToken?.role !== 'teacher') {
      return NextResponse.redirect(new URL('/dashboard/403', request.nextUrl));
    }
  }

  // Only For Student
  if (path === '/dashboard/students/exam') {
    console.log('I am student');
    if (decodedToken?.role !== 'student') {
      return NextResponse.redirect(new URL('/dashboard/403', request.nextUrl));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/login', '/signup', '/dashboard', '/dashboard/teachers/allCourses', '/dashboard/students/exam'],
};
