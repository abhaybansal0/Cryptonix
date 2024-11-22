"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import './page.css';

const Dashboard = () => {

    const [nopass, setnoPass] = useState(69)

    return (
        <div className='w-4/5 mx-auto bg-white '>
            <section className="welcome bg-white text-slate-900 p-10 flex flex-col justify-center items-center gap-6">
                <h1 className='welcometitle text-3xl text-center'>Welcome To Your Vault<span className='Blinker'>.</span></h1>

                <button className="btn aboutbtn">About Us</button>
            </section>


            <section className='Passwords_View'>

                <div className="pass_header flex justify-between">
                    <div className="header_txt ">
                        <Link href="/passwords"> <h1 className='text-black text-3xl font-bold '>Manager your Passwords</h1></Link>
                        <h4 className='text-gray-400 mt-6'>Saved Passwords: {nopass}</h4>
                    </div>
                    <div className="add_btn text-center text-4xl py-auto "><button onClick={() => { setnoPass((e) => e + 1) }}>+</button></div>
                </div>

                <div className="saved_passwords border rounded-3xl  bg-gray-200 mt-10 0 p-5 text-center">
                    <div className="pass1 grid grid-cols-4 gap-4 mb-7 text-lg font-semibold">
                        <div>Site</div>
                        <div>Username</div>
                        <div>Password</div>
                        <div>Edit</div>
                    </div>
                    <div className="hov_hilight grid grid-cols-4 gap-4 mt-4 overflow-hidden ">
                        <div>Pornhub</div>
                        <div>Deepa</div>
                        <div type="password">Havsi_insaan</div>
                        <Link href="/passwords"> <div>Button</div></Link>
                    </div>
                    <div className="hov_hilight grid grid-cols-4 gap-4 mt-4 overflow-hidden ">
                        <div>Android.io</div>
                        <div>Viku</div>
                        <div type="password">app_bnaunga:me</div>
                        <Link href="/passwords"> <div>Button</div></Link>
                    </div>
                    <div className="hov_hilight grid grid-cols-4 gap-4 mt-4 overflow-hidden ">
                        <div>Gaane.com</div>
                        <div>CMOS</div>
                        <div type="password">kyaa_karunmeee</div>
                        <Link href="/passwords"> <div>Button</div></Link>
                    </div>
                    <div className="hov_hilight grid grid-cols-4 gap-4 mt-4 overflow-hidden ">
                        <div>rust.com</div>
                        <div>Srf</div>
                        <div type="password">flutter_sikhado_koi</div>
                        <Link href="/passwords"> <div>Button</div></Link>
                    </div>
                    <div className="hov_hilight grid grid-cols-4 gap-4 mt-4 overflow-hidden ">
                        <div>gerated.sshhwie.com</div>
                        <div>Abhay</div>
                        <div type="password">uNjwe0h21nb</div>
                        <Link href="/passwords"> <div>Button</div></Link>
                    </div>
                    <div className="hov_hilight grid grid-cols-4 gap-4 mt-4 overflow-hidden ">
                        <div>Www.pagal.io.com</div>
                        <div>Abhay</div>
                        <div type="password">hShfwejK021b/JF</div>
                        <Link href="/passwords"> <div>Button</div></Link>
                    </div>

                </div>

            </section>



            <section className='Documents_View m-36'>

                <div className="pass_header flex justify-between">
                    <h1 className='text-black text-3xl font-bold '>Manager your Documents</h1>
                    <div className="add_btn text-center text-4xl py-auto "><button onClick={() => { setnoPass((e) => e + 1) }}>+</button></div>

                </div>


                <div className="saved_passwords border rounded-3xl  bg-gray-200 mt-10 0 p-5 text-center">


                </div>



            </section>

        </div>
    )
}

export default Dashboard
