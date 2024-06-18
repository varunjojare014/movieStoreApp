/** @format */

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-hot-toast";

function Signup() {
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const userInfo = {
			fullname: data.fullname,
			mobilenumber: data.mobilenumber,
			email: data.email,
			password: data.password,
			dob: data.dob,
		};
		try {
			const res = await axios.post(
				"http://localhost:4001/user/signup",
				userInfo
			);
			console.log(res);
			if (res.data) {
				toast.success("Bravo! Sign-up Successfully!");
				navigate(from, { replace: true });
				console.log(res.data);
				if (res.data.user) {
					localStorage.setItem("Users", JSON.stringify(res.data.user));
				} else {
					localStorage.setItem("Users", JSON.stringify(res.data));
				}
			}
		} catch (err) {
			if (err.response) {
				console.log(err);
				toast.error("Oops! Error: " + err.response.data.message);
			} else {
				toast.error("Oops! An unexpected error occurred.");
			}
		}
	};

	return (
		<>
			<Navbar />
			<div className='flex h-screen items-center justify-center'>
				<div className='w-[400px]'>
					<div className='modal-box'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Link
								to='/'
								className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
								✕
							</Link>

							<h3 className='font-bold text-xl'>Sign-up</h3>
							<div className='mt-4 space-y-1.5'>
								<span>Full Name</span>
								<br />
								<input
									type='text'
									placeholder='Enter your full name'
									className='w-80 px-5 py-1.5 border rounded-md outline-none'
									{...register("fullname", { required: true })}
								/>
								<br />
								{errors.fullname && (
									<span className='text-sm text-red-500'>
										* This field is required
									</span>
								)}
							</div>
							<div className='mt-4 space-y-2'>
								<span>Mobile Number</span>
								<br />
								<input
									type='text'
									placeholder='xxxxx xxxxx'
									className='w-80 px-5 py-1.5 border rounded-md outline-none'
									{...register("mobilenumber", { required: true })}
								/>
								<br />
								{errors.mobilenumber && (
									<span className='text-sm text-red-500'>
										* This field is required
									</span>
								)}
							</div>
							<div className='mt-4 space-y-2'>
								<span>E-mail</span>
								<br />
								<input
									type='email'
									placeholder='Enter your email'
									className='w-80 px-5 py-1.5 border rounded-md outline-none'
									{...register("email", { required: true })}
								/>
								<br />
								{errors.email && (
									<span className='text-sm text-red-500'>
										* This field is required
									</span>
								)}
							</div>
							<div className='mt-4 space-y-2'>
								<span>Set Password</span>
								<br />
								<input
									type='password'
									placeholder='Enter your password'
									className='w-80 px-5 py-1.5 border rounded-md outline-none'
									{...register("password", { required: true })}
								/>
								<br />
								{errors.password && (
									<span className='text-sm text-red-500'>
										* This field is required
									</span>
								)}
							</div>
							<div className='mt-4 space-y-2'>
								<span>Date of Birth</span>
								<br />
								<input
									type='text'
									placeholder='DD/MM/YYYY'
									className='w-80 px-5 py-1.5 border rounded-md outline-none'
									{...register("dob", { required: true })}
								/>
								<br />
								{errors.dob && (
									<span className='text-sm text-red-500'>
										* This field is required
									</span>
								)}
							</div>
							<div className='flex justify-around mt-4'>
								<button
									type='submit'
									className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 hover:scale-105'>
									Sign-up
								</button>
								<p>
									Have account?{" "}
									<span
										className='underline text-blue cursor-pointer hover:text-purple'
										onClick={() =>
											document.getElementById("my_modal_3").showModal()
										}>
										Login
									</span>{" "}
									<Login />
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Signup;
