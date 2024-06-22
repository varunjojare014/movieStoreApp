/** @format */

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import movieRoute from "./route/movie.route.js";
import userRoute from "./route/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// MongoDB-Connectivity-Code
try {
	mongoose.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log(`Connected to mongoDB ${mongoose.connection.host}`);
} catch (error) {
	console.log("Error Aala: ", error);
}

// defining routes
app.use("/movie", movieRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
