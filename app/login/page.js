"use client"
import React from 'react'
import Link from 'next/link'
import './page.css'
import { useSession, signIn, signOut } from "next-auth/react"


const Login = () => {


    const { data: session } = useSession();

    if (session) {
        return (

            <>
                <div className='flex flex-col justify-center items-center gap-12
                    w-screen h-screen bg-white text-black text-4xl
                        text-center'>
                    <div>
                        <div className="home absolute left-5 top-5"><Link href="/dashboard"><img src="./Home.png" alt="" className='w-9' /></Link></div>
                        <div>
                            Signed in as {session.user.email.split('@')[0]}
                            <span className='max-w-fit mx-0 hilightgoogel'>
                                @gmail.com
                            </span>
                        </div>

                    </div>
                    <button className='bg-black text-white w-fit py-4 px-8 border rounded-full '
                        onClick={() => signOut()}
                    >
                        Sign out
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

            <div className="home absolute left-5 top-5"><Link href="/dashboard"><img src="./Home.png" alt="" className='w-9'/></Link></div>
                <div>
                    Please Log in With Your
                    <span className='max-w-fit mx-3 hilightgoogel'>
                        Google
                    </span>
                    Account.
                </div>

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
