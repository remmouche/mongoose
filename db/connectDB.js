import mongoose from "mongoose";

async function connectDB(databaseUrl) {
	try {
		await mongoose.connect(databaseUrl);
		console.log("Database connected successfully");
	} catch (error) {
		console.error("Database connection failed:", error);
	}
}
export default connectDB;
