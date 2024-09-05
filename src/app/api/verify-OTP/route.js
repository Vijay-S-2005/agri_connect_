import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
    const { unProcessedPhoneNumber, otp } = await request.json().catch(() => null);
if (!unProcessedPhoneNumber || !otp) {
    return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
}

    console.log(unProcessedPhoneNumber, otp);
    // Retrieve the OTP record from the database
    console.log('hi1');
    const phoneNumber = unProcessedPhoneNumber.startsWith('+') ? unProcessedPhoneNumber : `+91${unProcessedPhoneNumber}`;
    const existingOtp = await prisma.oTP.findFirst({
        where: {
            phoneNumber,
            otp,
            // expiresAt: {
            //     gte: new Date(), // Ensure OTP is not expired
            // },
        },
    });
    console.log('hi2');



    if (!existingOtp) {
      console.log('Invalid or expired OTP');
        return NextResponse.json({ message: 'Invalid or expired OTP' }, { status: 400 });
    
    }

    // OTP is valid, so delete it
    await prisma.oTP.delete({
        where: { id: existingOtp.id },
    });
    console.log('OTP verified successfully');

    return NextResponse.json({ message: 'OTP verified successfully' });


}

export function GET() {
  console.log('GET method is not allowed');
    return NextResponse.json({ message: 'GET method is not allowed' }, { status: 405 });


}
