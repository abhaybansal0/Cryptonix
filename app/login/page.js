"use client"
import React from 'react'
import Link from 'next/link'
import './page.css'
import { useSession, signIn, signOut } from "next-auth/react"


const Login = () => {


    const { data: session } = useSession()

    if (session) {
        return (

            <>
                <div className='flex flex-col justify-center items-center gap-12
                    w-screen h-screen bg-white text-black text-4xl
                        text-center'>
                    <div>

                        Signed in as {session.user.email.split('@')[0]}
                        <span className='max-w-fit mx-0 hilightgoogel'>
                            @gmail.com
                        </span>

                    </div>
                    <button className='bg-black text-white w-fit py-4 px-8 border rounded-full '
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                </div>
            </>
        )
    }


    return (
        <div className='flex flex-col justify-center items-center gap-12
                 w-screen h-screen bg-white text-black text-4xl
                 text-center'>
            <div>

                Please Log in With Your
                <span className='max-w-fit mx-3 hilightgoogel'>
                    Google
                </span>
                Account.

            </div>
            <button className='bg-black text-white w-fit py-4 px-8 border rounded-full '
                onClick={() => signIn('google')}
            >
                Log In
            </button>
        </div>
    )
}

export default Login;











// "use client"
// import Image from "next/image";
// import { useSession, signIn, signOut } from "next-auth/react";



// export default function Home() {
//   const { data: session } = useSession()
//   if(session) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// }
