import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import twilio from 'twilio';

const prisma = new PrismaClient();
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(request) {
  try {
      const { phoneNumber } = await request.json();
      
      // Ensure phone number is in E.164 format
      const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`; // Adjust `+91` for your specific country code

      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

      await prisma.oTP.create({
          data: {
              phoneNumber: formattedPhoneNumber,
              otp,
              expiresAt,
          },
      });

      const message = await client.messages.create({
          body: `Your verification code is ${otp}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: formattedPhoneNumber,
      });

      console.log('Twilio Response:', message);

      return NextResponse.json({ message: 'OTP sent successfully' });
  } catch (error) {
      console.error('Twilio Error:', error);
      return NextResponse.json({ message: 'Failed to send OTP', error: error.message }, { status: 500 });
  }
}



export function GET() {
    return NextResponse.json({ message: 'GET method is not allowed' }, { status: 405 });
}
