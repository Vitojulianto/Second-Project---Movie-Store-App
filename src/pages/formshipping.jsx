import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar from '../Fragments/Navbar'
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const FormShipping = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/successorder')
  }

  return (
    <>
    <Navbar />
    <div className="max-w-lg mx-auto bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 p-8 rounded-lg shadow-lg mt-20">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Thanks for your order!</h2>
      <p className="text-center text-white mb-8">Please fill this form below to proceed with your shipping details.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Input */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-white font-semibold">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-3 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-white font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full p-3 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Phone Input */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-white font-semibold">Phone:</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full p-3 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Address Input */}
        <div className="space-y-2">
          <label htmlFor="address" className="text-white font-semibold">Address:</label>
          <input
            type="text"
            id="address"
            {...register('address', { required: 'Address is required' })}
            className="w-full p-3 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        {/* City Input */}
        <div className="space-y-2">
          <label htmlFor="city" className="text-white font-semibold">City:</label>
          <input
            type="text"
            id="city"
            {...register('city', { required: 'City is required' })}
            className="w-full p-3 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-full hover:opacity-80 transition-opacity">
            Submit
          </Button>
        </div>
      </form>
    </div>
    </>
  );
}

export default FormShipping;
