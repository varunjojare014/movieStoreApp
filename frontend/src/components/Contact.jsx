/** @format */

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
	return (
		<>
			<Navbar />
			<div className='pt-28 pl-28 pr-28 '>
				<div>
					<h1 className='flex justify-center font-bold text-5xl'>Contact Us</h1>
					<h3 className='font-bold text-2xl pb-3 pt-4'>Get in Touch</h3>
					<p className='pl-8'>
						We'd love to hear from you! Whether you have a question about our
						services, need assistance, or just want to give feedback, feel free
						to reach out to us using the form below or through any of the
						contact details provided.
					</p>
				</div>
				<div>
					<h3 className='font-bold text-2xl pt-5 pb-3'>Contact Information</h3>
					<div className='pl-8'>
						<span>
							<h5 className='text-xl'>Address:</h5>
							<p>
								Main building S05, Government College of Engineering,
								Chhatrapati Sambhajinagar, Pincode: 431005
							</p>
						</span>
						<span>
							<h5 className='text-xl pt-2'>E-mail:</h5>
							<p>varun.jojare@gmail.com</p>
						</span>
						<span>
							<h5 className='text-xl pt-2'>Phone:</h5>
							<p>+91 94054 07419</p>
							<p className='pt-2'>
								- Feel free to reach out via phone during business hours or
								email us anytime, and we will get back to you as soon as
								possible.
							</p>
						</span>
					</div>
				</div>
				<div>
					<h3 className='font-bold text-2xl pt-5 pb-3'>Follow us:</h3>
					<h6 className='pl-8'>
						Stay connected and up-to-date with our latest news and updates by
						following us on social media:
					</h6>
					<p className='pt-2 pl-8'>
						LinkedIn :
						<a
							className='text-blue text-decoration: underline'
							href='https://www.linkedin.com/in/varun-jojare-241975226/'>
							CLICK HERE
						</a>
					</p>
					<p className='pt-2 pl-8'>
						Facebook :
						<a
							className='text-blue text-decoration: underline'
							href='https://www.facebook.com/people/Varun-Jojare/pfbid02m75Lq8r8aRxypRTeDFpxrhBzYoimovk7XhjDgEpQ88hoArRGV6CYmDc6wxqJqSj3l/'>
							CLICK HERE
						</a>
					</p>
					<p className='pt-2 pl-8'>
						Instagram :
						<a
							className='text-blue text-decoration: underline'
							href='https://www.instagram.com/varun_jojare_0014/'>
							CLICK HERE
						</a>
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Contact;
