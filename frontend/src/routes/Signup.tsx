import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { loginUrl } from '../misc/baseurls'




const Signup = () => {


  const handleSignup  = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData); // convert the FormData object to a JSON object

  }
  return (
    <div className="w-full h-[100vh] bg-green-500  flex flex-col items-center justify-center" >
    <Header />
    <form className="flex flex-col items-center h-2/5 h-auto  bg-slate-500 bg-opacity-75  shadow-2xl w-8/12 rounded-3xl p-6" onSubmit={handleSignup}> 
        <label className='text-white text-3xl	pb-3 font-semibold'>Email: </label>
        <input name="email" className='border text-2xl py-2 px-3 text-grey-darkest w-full rounded-lg mb-6'  type="text" id="" />
        <label className='text-white text-3xl	pb-3 font-semibold'>Password: </label>
        <input name="password" className='border  text-2xl py-2 px-3 text-grey-darkest w-full rounded-lg mb-6' type="password" id="" />
        <p className='text-[1.3rem] text-white'>Have an account? <Link to={'/login'}>Login</Link></p>
        <button type='submit' className='text-3xl pr-12 pl-12 pb-4 pt-4 text-center rounded-2xl mb-5 text-white hover:bg-blue-600 hover:scale-90 bg-blue-400'>Signup</button>
      </form>
  </div>
  )
}

export default Signup