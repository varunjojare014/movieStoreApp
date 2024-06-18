/** @format */

import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
	id: Number,
	name: String,
	title: String,
	year: Number,
	description: String,
	category: String,
	image: String,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
