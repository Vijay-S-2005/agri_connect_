// // import { getIronSession } from "iron-session";
// import { cache } from "../../../../config/cache";

// // import { sessionOptions } from "./send"; 

// export async function POST(req,res) {

//     // const { otp } = req.body;
//     let otp="k1KPVe"

//     let phoneNumber = "7395963411";
//     let str="vijay" 
//     console.log(cache.get(str));

//     // Retrieve OTP from session
//     // const session = await getIronSession(req, res, sessionOptions);
//     // const storedOtp = session.otp;

//     if (cachedOtp === otp) {
//       // Clear the OTP from session after successful verification
//       // session.destroy();
//       console.log("OTP verified");
//       // res.status(200).json({ message: "OTP verified" });
//     } else {
//         console.log("Invalid OTP");
//       // res.status(400).json({ error: "Invalid OTP" });
//     }

// }



import { NextResponse } from 'next/server';

export async function GET(request) {
  // Retrieve the 'name' from the cookies
  const storedOtp = request.cookies.get("otp")?.value;
  console.log("OTP",storedOtp)

  return NextResponse.json({ storedOtp });
}