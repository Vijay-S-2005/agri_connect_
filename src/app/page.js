import { redirect } from "next/navigation";

export default function Home() {
  
  redirect('/home'); // Automatically redirect to /home
  return null; // Return nothing since this is just a redirect
}
