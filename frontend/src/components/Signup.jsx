import React from "react"
import {Link} from "react-router-dom"
import Login from "./Login"
import {useForm} from "react-hook-form"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <Navbar />
      <div className='flex h-screen items-center justify-center'>
        <div className='w-[400px]'>
          <div className='modal-box'>
            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to='/'
                className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                ✕
              </Link>

              <h3 className='font-bold text-xl'>Sign-up</h3>
              {/*full name*/}
              <div className='mt-4 space-y-1.5'>
                <span>Full Name</span>
                <br />
                <input
                  type='text'
                  placeholder='Enter your full name'
                  className='w-80 px-5 py-1.5 border rounded-md outline-none'
                  {...register("text", {required: true})}
                />
                <br />
                {errors.text && (
                  <span className='text-sm text-red-500'>
                    * This field is required
                  </span>
                )}
              </div>
              {/*Mobile*/}
              <div className='mt-4 space-y-2'>
                <span>Mobile Number</span>
                <br />
                <input
                  type='number'
                  placeholder='xxxxx xxxxx'
                  className='w-80 px-5 py-1.5 border rounded-md outline-none'
                  {...register("number", {required: true})}
                />
                <br />
                {errors.number && (
                  <span className='text-sm text-red-500'>
                    * This field is required
                  </span>
                )}
              </div>
              {/*Email*/}
              <div className='mt-4 space-y-2'>
                <span>E-mail</span>
                <br />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-80 px-5 py-1.5 border rounded-md outline-none'
                  {...register("email", {required: true})}
                />
                <br />
                {errors.email && (
                  <span className='text-sm text-red-500'>
                    * This field is required
                  </span>
                )}
              </div>
              {/*Set Password*/}
              <div className='mt-4 space-y-2'>
                <span>Set Password</span>
                <br />
                <input
                  type='password'
                  placeholder='Enter your password'
                  className='w-80 px-5 py-1.5 border rounded-md outline-none'
                  {...register("password", {required: true})}
                />
                <br />
                {errors.password && (
                  <span className='text-sm text-red-500'>
                    * This field is required
                  </span>
                )}
              </div>
              {/*Birth Date*/}
              <div className='mt-4 space-y-2'>
                <span>Date of Birth</span>
                <br />
                <input
                  type='text'
                  placeholder='DD/MM/YYYY'
                  className='w-80 px-5 py-1.5 border rounded-md outline-none'
                  {...register("text", {required: true})}
                />
                <br />
                {errors.text && (
                  <span className='text-sm text-red-500'>
                    * This field is required
                  </span>
                )}
              </div>
              {/*Login*/}
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 hover:scale-105'>
                  Sign-up
                </button>
                <p>
                  Have account?{" "}
                  <button
                    className='underline text-blue cursor-pointer hover:text-purple'
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }>
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup
