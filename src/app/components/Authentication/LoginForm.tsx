import React from 'react';
import FormInput from '../Shared/FormInput';

const LoginForm: React.FC = () => (
    <>
        <form>
            <FormInput />
            {/* <div className="relative z-0 w-full mb-5 group">
                <input type="email"  />
                <label htmlFor="email">Email</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" />
                <label htmlFor="password">Password</label>
            </div>
            
            <button type="submit" className="bg-blue-700"></button> */}
        </form>
        <h2>Login Form</h2>
    </>
);  
export default LoginForm
