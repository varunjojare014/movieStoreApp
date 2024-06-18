/** @format */

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
	return (
		<>
			<Navbar />
			<div className='pt-28 pl-28 pr-28 '>
				<h1 className='flex justify-center font-bold text-5xl'>
					About CineVault
				</h1>
				<div>
					<h3 className='font-bold text-2xl pt-5 pb-3'>Welcome to Cinevault</h3>
					<p>
						At Cinevault, we believe in the power of storytelling through film.
						As a premier movie store web application, Cinevault offers a rich
						and diverse collection of movies from all genres and eras. Whether
						you're captivated by classic cinema, intrigued by indie productions,
						or excited about the latest Hollywood blockbusters, Cinevault is
						designed to cater to your cinematic tastes and preferences.
					</p>
				</div>
				<div>
					<h3 className='font-bold text-2xl pt-5 pb-3'>Our Story</h3>
					<p>
						Cinevault was founded in 2024 by Varun Jojare, a passionate movie
						enthusiast who envisioned a digital platform where film lovers could
						easily access and enjoy a vast array of movies. Varun's dream was to
						create a space where anyone, anywhere, could dive into the world of
						cinema, exploring films from different cultures and time periods
						without leaving their homes. What started as a personal project
						quickly grew into a dynamic community and a leading destination for
						movie lovers around the globe.
					</p>
				</div>
				<div>
					<h3 className='font-bold text-2xl pt-5 pb-3'>Our Mission</h3>
					<p>
						Our mission at Cinevault is to bring movies to life for everyone. We
						strive to provide an extensive library of films, offering users a
						seamless and enjoyable experience whether they are browsing,
						renting, or purchasing their favorite movies. We are dedicated to
						delivering high-quality streaming, excellent customer service, and
						creating a welcoming environment where movie enthusiasts can connect
						and share their passion for cinema.
					</p>
				</div>
				<div>
					<h3 className='font-bold text-2xl pt-5 pb-3'>Meet Our Founder</h3>
					<p>
						Varun Jojare, the founder of Cinevault, turned his love for movies
						into a thriving platform. His vision and dedication have shaped
						Cinevault into a place where film aficionados can find and enjoy
						their favorite films. Varun continues to lead the way in making
						movies more accessible and enjoyable for everyone.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default About;
