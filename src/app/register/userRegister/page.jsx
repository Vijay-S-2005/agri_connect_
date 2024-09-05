'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [message, setMessage] = useState('');


    const handleInputChange = (e) => {
        setOtp(e.target.value);
    };
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[6789]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits and start with 6, 7, 8, or 9';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const verifyOtp = async () => {
    try {
      console.log("hit1")
      console.log("ph",formData.phoneNumber)
      const response = await axios.post('/api/verify-OTP', { unProcessedPhoneNumber: formData.phoneNumber, otp });

      if (response.status === 200) {
        setMessage('OTP verified successfully');
        try{
        const response = await axios.post('/api/register', formData);
        alert('Registration successful!');
        console.log("register success")
        console.log(response)
        }
        catch (error) {
          // Handle error
          if (error.response) {
            // Request made and server responded with a status code outside of 2xx
            setErrors({ submit: error.response.data.error });
          } else if (error.request) {
            // The request was made but no response was received
            setErrors({ submit: 'No response from server' });
          } 
          else {
            // Something happened in setting up the request that triggered an Error
            setErrors({ submit: 'Error in request setup' });
            setMessage(error.response?.data?.message || 'Failed to send OTP');
          }
        }

      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Invalid or expired OTP');
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
        setFormValid(true);
      setErrors({});
  
      try {
        
        
        const response = await axios.post('/api/send-OTP', { phoneNumber: formData.phoneNumber });
        console.log("hit2")

        // Handle success (e.g., redirect to login page)

        if (response.status === 200) {
            setIsOtpSent(true);
            setMessage('OTP sent successfully');
          }


        // Clear the form data
        // setFormData({
        //     firstName: '',
        //     lastName: '',
        //     phoneNumber: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: '',
        // });


        
      } catch (error) {
        // Handle error
        if (error.response) {
          // Request made and server responded with a status code outside of 2xx
          setErrors({ submit: error.response.data.error });
        } else if (error.request) {
          // The request was made but no response was received
          setErrors({ submit: 'No response from server' });
        } 
        else {
          // Something happened in setting up the request that triggered an Error
          setErrors({ submit: 'Error in request setup' });
          setMessage(error.response?.data?.message || 'Failed to send OTP');
        }
      }
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        {!formValid ?(
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          User Register
        </h1>
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            Send OTP
          </button>
        </form>
      </div>

        ):(

            <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
              <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter your OTP"
                    value={otp}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  onClick={verifyOtp}
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Verify OTP
                </button>
                {message && <p style={{ marginTop: '20px', color: 'red' }}>{message}</p>}
              </form>
            </div>
          </div>
        )}
        
    </div>
  );
}
