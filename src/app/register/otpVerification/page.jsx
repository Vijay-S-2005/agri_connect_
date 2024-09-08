'use client';
import React from 'react'

const OTPVerification = () => {
    const [otp] = React.useState('');
    const handleInputChange= (e) => {   
        setOtp(e.target.value);
    }
    const verifyOtp = async (e) => {
    }
  return (
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
        {/* {message && <p style={{ marginTop: '20px', color: 'red' }}>{message}</p>} */}
      </form>
    </div>
  </div>
  )
}
export default OTPVerification;