/** @format */

import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Movie() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get("http://localhost:4001/movie");
				console.log(res.data);
				setMovie(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getMovie();
	}, []);
	return (
		<>
			<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
				<div className='pt-28 items-center justify-center text-center'>
					<h1 className='text-2xl font-semibold md:text-4xl'>
						Experience the <span text-blue-500> Magic of Bollywood..!!!</span>
					</h1>
					<p className='mt-8'>
						"Welcome to our Bollywood oasis, where dreams are spun into
						cinematic gold. Dive into a kaleidoscope of vibrant narratives,
						pulsating rhythms, and unforgettable performances that define the
						essence of Indian cinema. From timeless classics that have shaped
						generations to the latest blockbusters setting trends, our
						collection is a celebration of storytelling at its finest. Join us
						on a journey through the heart and soul of Bollywood, where every
						frame resonates with passion, emotion, and the enduring spirit of a
						billion dreams."
					</p>
					<Link to='/'>
						<button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700 duration-200'>
							Back
						</button>
					</Link>
				</div>

				<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
					{movie.map((item) => (
						<Cards key={item.id} item={item} />
					))}
				</div>
			</div>
		</>
	);
}

export default Movie;
