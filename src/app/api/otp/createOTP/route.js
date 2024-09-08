import otpGenerator from 'otp-generator';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import twilio from "twilio";
// // import { withSession } from '@/lib/session';
// import { cache } from "../../../../config/cache";
git checkout -b new_branchconst accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);
  export async function POST(req,res) {
    // const {phoneNumber} =req.body;
    const phoneNumber="+917395963411";
    // let phoneNumber = "+917395963411";
    console.log("phone number pa",phoneNumber);
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
    const response = NextResponse.json({ message: `OTP ${otp} set for 5 minutes` });

//     // const expiryTime = Date.now() + 300000;

//     // Store OTP and expiry in the session
//     // req.session.otpExpiry = expiryTime;
response.cookies.set(phoneNumber, otp, {
  httpOnly: true, // Prevent client-side access
  sameSite: "strict", // Enhance security
  maxAge: 5 * 60, // 5 minutes in seconds
});
console.log("OTP session la store aiduchi");

    try {
     // Send OTP via Twilio
      await client.messages.create({
        body: `Your OTP code is ${otp}`,
        from: twilioPhoneNumber,
        to: phoneNumber
      });

      console.log(`OTP ${otp} sent to ${phoneNumber}`);
//       // return res.status(200).json({ message: 'OTP sent successfully!' });
    } catch (error) {
      console.error('Error sending OTP:', error);
//       // return res.status(500).json({ message: 'Failed to send OTP' });
    }
  
    return response;

//   // res.status(405).json({ message: 'Method not allowed' });
}



