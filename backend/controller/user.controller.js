/** @format */

import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
	try {
		const { fullname, mobilenumber, email, password, dob } = req.body;
		const user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: "Alert! User already exists!" });
		}
		const hashPassword = await bcryptjs.hash(password, 10);
		const createdUser = new User({
			fullname: fullname,
			mobilenumber: mobilenumber,
			email: email,
			password: hashPassword,
			dob: dob,
		});
		await createdUser.save();
		res.status(201).json({ message: "Bravo! User created successfully!" });
	} catch (error) {
		console.log("Error: " + error.message);
		res.status(500).json({ message: "Oops! Internal server error!" });
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isMatch = await bcryptjs.compare(password, user.password);
		if (!user || !isMatch) {
			return res.status(400).json({
				message: "Invalid Username or Password!",
				user: {
					_id: createdUser._id,
					fullname: createdUser.fullname,
					email: createdUser.email,
				},
			});
		} else {
			res.status(200).json({
				message: "Login Successful!",
				user: {
					_id: user._id,
					fullname: user.fullname,
					mobilenumber: user.mobilenumber,
					email: user.email,
					dob: user.dob,
				},
			});
		}
	} catch (error) {
		console.log("Error: " + error.message);
		res.status(500).json({ message: "Oops! Internal server error!" });
	}
};
