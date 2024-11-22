"use client"
import React, { useEffect, useRef, useState } from 'react'
import './page.css'
import Form from 'next/form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Passwords = () => {

  // useEffect(() => {
  //   console.log(Passwordsarray);



  // }, [])



  const [Passwordsarray, setPasswords] = useState([
    // {
    //   site: 'Abhay',
    //   username: 'JHNJU',
    //   password: 'CMOSS'
    // },
    // {
    //   site: 'Abhay',
    //   username: 'JHNJU',
    //   password: 'CMOSS'
    // },
    // {
    //   site: 'Abhay',
    //   username: 'JHNJU',
    //   password: 'CMOSS'
    // },

  ])


  const nooms = useRef(Passwordsarray.length)


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
      return toast('Please Fill All The Fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    setPasswords([...Passwordsarray, { ...formdata, id: uuidv4() }]);

    console.log("Info Submitted: ", formdata);
    setFormdata({ site: '', username: '', password: '' })
  }


  const DeletePass = (id) => {
    setPasswords(Passwordsarray.filter((item) => item.id != id))

    return toast(`Password was Successfully Deleted!!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const EditPass = (id) => {
    const pass_set = Passwordsarray.filter((set) => set.id == id)[0];

    setFormdata({ site: `${pass_set.site}`, username: `${pass_set.username}`, password: `${pass_set.password}`, id: `${pass_set.id}` })

    console.log('Following Password is Being Deleted: ', formdata);
    setPasswords(Passwordsarray.filter((item) => item.id != id))





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



  return (

    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover= {false}
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
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

              <div className='mt-7'>
                <button type='submit' className='min-w-fit p-3 bg-black flex items-center gap-3 text-white border rounded-xl mx-auto'>
                  <lord-icon
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="hover"
                    colors="primary:#000000"
                    className='invert'
                  >
                  </lord-icon>Add Password
                </button>
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



              {/* ///////////////////////////////////////////////////////// Passwordsarray */}

              <div className='slide'>
                <span className='w-2/5 text-center'>Wassup Biatch</span>
                <span className='w-1/5 text-center'>Wassup Biatch</span>
                <span style={{ WebkitTextSecurity: "disc" }} className='w-1/5 text-center'>Wassup Biatch</span>
                <span className='w-1/5 text-center max-h-9'>
                  <button className='edit '>
                    <lord-icon
                      src="https://cdn.lordicon.com/gwlusjdu.json"
                      trigger="hover"
                      colors="primary:#000000"
                      className='w-6 align-middle'>
                    </lord-icon>
                  </button>
                  <button className='edit '>
                    <lord-icon
                      src="https://cdn.lordicon.com/skkahier.json"
                      trigger="hover"
                      colors="primary:#000000"
                      className='w-6 ml-5 align-middle'>
                    </lord-icon>
                  </button>
                </span>
              </div>


              {Passwordsarray ? (Passwordsarray.map((pass, index) => {
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

export default Passwords
