import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const dbUrl = process.env.ATLAS_URL;

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://shivams7380:shivamongo@cluster0.3oiwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
		// await mongoose.connect(dbUrl);
		console.log("connected to db")
	} catch (error) {
		console.log(`connection faild ${error}`)
	}
}

export default connectDB;