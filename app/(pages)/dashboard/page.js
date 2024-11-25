"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import './page.css';

const Dashboard = () => {
    

    const [nopass, setnoPass] = useState(69)

    return (
        <div className='w-4/5 mx-auto bg-white '>
            <section className="welcome bg-white text-slate-900 p-10 flex flex-col justify-center items-center gap-6">
                <h1 className='welcometitle text-3xl text-center'>Welcome To Your Vault<span className='Blinker'>.</span></h1>

                <a href="https://portfolio-flame-psi-83.vercel.app" target='__blank'>
                    <button className="btn p-3 px-5">About Us</button>
                </a>
            </section>


            <section className='Passwords_View mt-20' id='passwords'>

                <div className="pass_header flex justify-between">
                    <div className="header_txt ">
                        <Link href="/passwords"> <h1 className='text-black text-3xl font-bold flex gap-8 items-center md:text-2xl'>Manager your Passwords<img src="./link.png" alt="" className='w-5 h-5' /></h1></Link>
                        <h4 className='text-gray-400 mt-6 md:mt-3'>Saved Passwords: {nopass}</h4>
                    </div>
                    <div className="add_btn text-center text-4xl py-auto md:invisible"><a href="/passwords"><button>+</button></a></div>
                </div>

                <div className="saved_passwords border rounded-3xl  bg-gray-200 mt-10 0 p-5 md:p-2 md:py-5 text-center shadow-md">
                    <div className="pass1 grid grid-cols-4 gap-4 md:gap-2 mb-7 text-lg font-semibold">
                        <div>Site</div>
                        <div>Username</div>
                        <div>Password</div>
                        <div>Edit</div>
                    </div>
                    <div className="hov_hilight grid grid-cols-4 gap-4 md:gap-1 mt-4 md:text-sm overflow-hidden ">
                        <div className='overflow-clip' >Pornhub</div>
                        <div className='overflow-clip'>Deepa</div>
                        <div type="password" className='overflow-clip'>Havsi_insaan</div>
                        <Link href="/passwords"> <div><img src="./link.png" alt="Link" className='w-5 mx-auto md:w-4' /></div></Link>
                    </div>
                    <div className="hov_hilight grid grid-cols-4 gap-4 md:gap-1 mt-4 md:text-sm overflow-hidden ">
                        <div className='overflow-clip'>Android.io</div>
                        <div className='overflow-clip'>Viku</div>
                        <div type="password" className='overflow-clip'>app_bnaunga:me</div>
                        <Link href="/passwords"> <div><img src="./link.png" alt="Link" className='w-5 mx-auto md:w-4' /></div></Link>
                    </div>

                    <div className="hov_hilight grid grid-cols-4 gap-4 md:gap-1 mt-4 md:text-sm overflow-hidden ">
                        <div className='overflow-clip'>Radio.com</div>
                        <div className='overflow-clip'>CMOS</div>
                        <div type="password" className='overflow-clip'>kyaa_karunmeee</div>
                        <Link href="/passwords"> <div><img src="./link.png" alt="Link" className='w-5 mx-auto md:w-4' /></div></Link>
                    </div>

                    <div className="hov_hilight grid grid-cols-4 gap-4 md:gap-1 mt-4 md:text-sm overflow-hidden ">
                        <div className='overflow-clip'>rust.com</div>
                        <div className='overflow-clip'>Srf</div>
                        <div type="password" className='overflow-clip'>flutter_sikhado_koi</div>
                        <Link href="/passwords"> <div><img src="./link.png" alt="Link" className='w-5 mx-auto md:w-4' /></div></Link>
                    </div>

                    <div className="hov_hilight grid grid-cols-4 gap-4 md:gap-1 mt-4 md:text-sm overflow-hidden ">
                        <div className='overflow-clip'>GREATEST.com</div>
                        <div className='overflow-clip'>Abhay</div>
                        <div type="password" className='overflow-clip'>uNjwe0h21nb</div>
                        <Link href="/passwords"> <div><img src="./link.png" alt="Link" className='w-5 mx-auto md:w-4' /></div></Link>
                    </div>

                    <div className="hov_hilight grid grid-cols-4 gap-4 md:gap-1 mt-4 md:text-sm overflow-hidden ">
                        <div className='overflow-clip'>Www.akyubeats.io.com</div>
                        <div className='overflow-clip'>Abhay</div>
                        <div type="password" className='overflow-clip'>hShfwejK021b/JF</div>
                        <Link href="/passwords"> <div><img src="./link.png" alt="Link" className='w-5 mx-auto md:w-4' /></div></Link>
                    </div>

                </div>

            </section>



            <section className='Documents_View mt-36' id='documents'>

                <div className="pass_header flex justify-between">
                    <h1 className='text-black text-3xl font-bold '>Manager your Documents</h1>
                    <div className="add_btn text-center text-4xl py-auto "><button  >+</button></div>

                </div>


                <div className="saved_passwords border rounded-3xl  bg-gray-200 mt-10 0 p-5 text-center shadow-xl">
                    Coming Soon...

                </div>



            </section>

        </div>
    )
}

export default Dashboard
