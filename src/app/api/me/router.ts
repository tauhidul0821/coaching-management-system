import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = NextResponse.json({
      message: 'Me route call...',
      success: true,
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json({ message: 'An error occurred while logout the user', error }, { status: 500 });
  }
}
