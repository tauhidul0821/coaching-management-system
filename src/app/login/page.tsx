'use client';

import React, {useState} from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email,
            password,
            redirect: false
        }
        console.log(data);

        try{
            const res = await signIn('credentials', data);

            if(res?.error){
                setError('Invalid Credentials');
                return;
            }

            router.replace('dashboard');

        }catch(err){
            console.log(err);
        }
    }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </div>
            
            {error && (
                <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                    {error}
                </div>
            )}

            <button 
                type="submit" 
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
                Login
            </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
        Don't have an account? 
        <Link href="/signup" 
            className="text-blue-500 hover:underline"> Sign up
        </Link>
        </p>
      </div>
      </div>
  )
}

export default LoginForm


