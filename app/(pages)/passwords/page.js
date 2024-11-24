"use client"
import React, { useEffect, useRef, useState, } from 'react'
import { useSession } from "next-auth/react"
import './page.css'
import Form from 'next/form'

import { v4 as uuidv4 } from 'uuid';








const Passwordspage = () => {

  const { data: session } = useSession();

  const [passwordArray, setPasswords] = useState([]);

  // Fetch passwords from server (GET)
  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const response = await fetch('/api/passwords', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
        console.log(data);

        setPasswords(Array.isArray(data) ? data : [data]);
        console.log("Passwords Were Fetched Successfully!");



      } catch (error) {
        console.error("Error fetching passwords:", error);
      }
    };

    fetchPasswords();
  }, []);

  // Send new passwords to the server (POST)
  useEffect(() => {
    if (passwordArray.length === 0) return; // Don't run POST if array is empty

    const savePasswords = async () => {
      try {
        const response = await fetch('/api/passwords', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passwordArray),
        });
        const result = await response.json();
        console.log('Passwords were saved');
      } catch (error) {
        console.error('Error saving passwords:', error);
      }
    };

    savePasswords();
  }, [passwordArray]);



  const nooms = useRef(passwordArray.length)


  const [formdata, setFormdata] = useState({
    site: '',
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents reloading of page

    if (formdata.password.trim() == '',
      formdata.site.trim() == '',
      formdata.password.trim() == '') {
      return alert('Fill All the Fileds!')
    }

    setPasswords([...passwordArray, { ...formdata, id: uuidv4() }]);

    console.log("Info Submitted: ", formdata);
    setFormdata({ site: '', username: '', password: '' })
  }


  const DeletePass = (id) => {
    setPasswords(passwordArray.filter((item) => item.id != id))
    console.log('Following Password is Being Deleted: ', formdata);

  }
  const EditPass = (id) => {
    const pass_set = passwordArray.filter((set) => set.id == id)[0];

    setFormdata({ site: `${pass_set.site}`, username: `${pass_set.username}`, password: `${pass_set.password}`, id: `${pass_set.id}` })

    setPasswords(passwordArray.filter((item) => item.id != id))





  }



  const Pass = ({ pass, index }) => {
    let color = '';
    if (index % 2 == 0) {
      color = "#f2f2f2";
    } else {
      color = 'white';
    }
    return (
      <div className='slide' >
        <span className='w-2/5 text-center'>{pass.site}</span>
        <span className='w-1/5 text-center'>{pass.username}</span>
        <span style={{ WebkitTextSecurity: "disc" }} className='w-1/5 text-center'>{pass.password}</span>
        <span className='w-1/5 text-center '>
          <button className='edit ' onClick={(e) => { EditPass(pass.id) }}>
            <lord-icon
              src="https://cdn.lordicon.com/gwlusjdu.json"
              trigger="hover"
              colors="primary:#000000"
              className='w-6 align-middle'>
            </lord-icon>
          </button>
          <button className='Delete ' onClick={(e) => { DeletePass(pass.id) }}>
            <lord-icon
              src="https://cdn.lordicon.com/skkahier.json"
              trigger="hover"
              colors="primary:#000000"
              className='w-6 ml-5 align-middle'>
            </lord-icon>
          </button>

        </span>
      </div>
    )
  }



  const Notloged = () => {

    if (session) {
      return (<></>)
    }
    else {
      return <div className='p-3 border-2 border-solid border-red-400 rounded-lg flex justify-center items-center gap-3'>
        <img src="./exclamation.gif" alt="Exclamation!" className='w-7 '/>
        Sign In to Save Your Passwords.
      </div>
    }

  }



  return (

    <>

      <div >
        <div className="container  max-w-7/9 mx-auto">

          <section className="pass_editor">

            <Form onSubmit={handleSubmit} initialvalues={formdata}>

              <div className="input_area border rounded-3xl  bg-gray-200 mt-10 0 p-5 text-center 
            flex flex-col justify-center gap-6 py-10">

                <div className="email">
                  <input
                    type="text"
                    id="site"
                    value={formdata.site}
                    name='site'
                    placeholder='Site URL'
                    className='w-full'
                    onChange={handleChange}
                  />
                </div>

                <div className='flex gap-10 justify-center'>
                  <input
                    type="text"
                    id='username'
                    name='username'
                    value={formdata.username}
                    placeholder='Username'
                    className='w-3/5'
                    onChange={handleChange} />

                  <input
                    type="password"
                    id='password'
                    value={formdata.password}
                    name='password'
                    placeholder='Password'
                    className='w-2/5'
                    onChange={handleChange} />
                </div>
              </div>

              <div className='mt-7 flex items-center justify-center gap-3'>
                <button type='submit' className='min-w-fit p-3 bg-black flex items-center gap-3 text-white border rounded-xl'>
                  <lord-icon
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="hover"
                    colors="primary:#000000"
                    className='invert'
                  >
                  </lord-icon>Add Password
                </button>

                <Notloged />
              </div>
            </Form>
          </section>


          <section className='stored_passwords mt-20 '>

            <div className='pass_header'>
              <h1 className='text-black text-2xl font-bold mb-5'>Your Passwords</h1>
            </div>

            <div className="pass_container">

              <div className='w-full bg-black text-white p-2 border rounded-t-lg
              flex justify-around'>


                <span className='w-2/5 text-center'>Site</span>
                <span className='w-1/5 text-center'>Username</span>
                <span className='w-1/5 text-center'>Password</span>
                <span className='w-1/5 text-center'>Actions</span>


              </div>


              {/* ///////////////////////////////////////////////////////// passwordArray */}




              {passwordArray ? (passwordArray.map((pass, index) => {
                return (
                  <Pass key={index} pass={pass} index={index} />
                )
              })) : (
                <h4>No Passwords Available</h4>
              )}
            </div>


          </section>

        </div>



      </div>
    </>
  )
}

export default Passwordspage
