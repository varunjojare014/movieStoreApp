import React from "react"
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from "axios";
import { toast } from "react-hot-toast";

function Login() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const userInfo = {
			email: data.email,
			password: data.password,
		};
		try {
			const res = await axios.post(
				"http://localhost:4001/user/login",
				userInfo
			);
			console.log(res);
			if (res.data) {
				toast.success("Login Successful!");
				document.getElementById("my_modal_3").close();
				setTimeout(() => {
					window.location.reload();
					if (res.data.user) {
						localStorage.setItem("Users", JSON.stringify(res.data.user));
					} else {
						localStorage.setItem("Users", JSON.stringify(res.data));
					}
					console.log(res.data);
				}, 1000);
			}
		} catch (err) {
			if (err.response) {
				console.log(err);
				toast.error("Oops! Error: " + err.response.data.message);
				setTimeout(() => {}, 2000);
			} else {
				toast.error("Oops! An unexpected error occurred.");
			}
		}
	};

	return (
		<div>
			<dialog id='my_modal_3' className='modal'>
				<div className='modal-box'>
					<form onSubmit={handleSubmit(onSubmit)} method='dialog'>
						{/* if there is a button in form, it will close the modal */}
						<Link
							to='/'
							className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
							onClick={() => document.getElementById("my_modal_3").close()}>
							✕
						</Link>

						{/*Email*/}
						<h3 className='font-bold text-xl'>Login</h3>
						<div className='mt-4 space-y-2'>
							<span>E-mail</span>
							<br />
							<input
								type='email'
								placeholder='Enter your email'
								className='w-80 px-3 py-1 border rounded-md outline-none'
								{...register("email", { required: true })}
							/>
							<br />
							{errors.email && (
								<span className='text-sm text-red-500'>
									* This field is required
								</span>
							)}
						</div>
						{/*Password*/}
						<div className='mt-4 space-y-2'>
							<span>Password</span>
							<br />
							<input
								type='password'
								placeholder='Enter your password'
								className='w-80 px-3 py-1 border rounded-md outline-none'
								{...register("password", { required: true })}
							/>
							<br />
							{errors.password && (
								<span className='text-sm text-red-500'>
									* This field is required
								</span>
							)}
						</div>
						{/*Login*/}
						<div className='flex justify-around mt-4'>
							<button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 hover:scale-105'>
								Login
							</button>
							<p>
								Not Registered?{" "}
								<Link
									to='/signup'
									className='underline text-blue cursor-pointer hover:text-purple'>
									Sign-up
								</Link>{" "}
							</p>
						</div>
					</form>
				</div>
			</dialog>
		</div>
	);
}

export default Login
