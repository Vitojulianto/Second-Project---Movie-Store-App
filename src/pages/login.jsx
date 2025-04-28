

import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import Input from '../components/InputLabel/Input'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const LoginForm = () => {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        const savedData = JSON.parse(localStorage.getItem('username'));
        if(savedData.username === data.username && savedData.password === data.password){
            localStorage.setItem('loggedInUser', data.username);    
            navigate('/home')
        }else{
            alert('Username or password is incorrect')
        }
    }

  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-center bg-cover bg-gradient-to-br from-purple-700 via-pink-500 to-red-400 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Welcome back, Otaku!</h2>
        <form onSubmit={handleSubmit(onSubmit)}className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <Input type='text' placeholder="Enter your username" name="username"
            {...register('username', {required: 'Username is required'})}/>
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Input type='password' placeholder="Enter your password" name="password"
            {...register('password',{required:'Password is required', minLength:
                {value: 8, message: 'Password must be at least 8 characters'}})}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="btn w-full bg-purple-600 hover:bg-purple-700 text-white">
            Login
          </Button>
          <p className="text-center text-sm text-gray-600">
            Don't have an account? <Link to="/register" className="text-purple-700 font-semibold">Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm

