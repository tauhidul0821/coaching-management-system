import { NextRequest, NextResponse } from "next/server"
import User from "../../models/users";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    try{
        const {name, email, password, role} = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);


        const payload = {
            name,
            email,
            password: hashedPassword,
            role
        }
        
        // check if user already exists
        const userExists = await User.findOne({email})
        if(userExists){
            return NextResponse.json({message: 'User already exists'}, {status: 400});
        }

        await User.create(payload);

        return NextResponse.json({message: 'User registered.'}, {status: 201})
    }catch(error){
        console.log(error);
        return NextResponse.json(
            {message: 'An error occurred while signup the user', error},
            {status: 500}
        )
    }
}
