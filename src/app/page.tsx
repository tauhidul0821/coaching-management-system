import React from 'react'
import Login from "./login/page";
import connectDB from '@/config/database'

const Home = async () => {
  console.log('I am here...')
  //await connectDB();
  return (
    <>
      <Login />
    </>
  )
}
export default Home
