import React from 'react';
import Login from './login/page';
import connectDB from '@/config/database';

const Home = async () => {
  await connectDB();
  return (
    <>
      <Login />
    </>
  );
};
export default Home;
