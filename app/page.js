"use client"
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";



export default function Home() {
  const { data: session } = useSession()
  return (

    <div className="flex items-center justify-center">
      <img src="./protection.png" alt="HOME" className="w-52" />
    </div>
  )
}
