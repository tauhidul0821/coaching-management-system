import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    try {
        const response = NextResponse.json({
            message: 'User logged out successfully',
            success: true
        });

        response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });

        return response;

        
    } catch (error: any) {
        return NextResponse.json(
            { message: 'An error occurred while logout the user', error },
            { status: 500 }
        )

        
    }
}