import mongoose from 'mongoose';

async function connectDB(databaseUrl){
    try{
        await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully");

    }catch (error){
        console.error("Database connection failed:", error);
    }
}
export default connectDB;