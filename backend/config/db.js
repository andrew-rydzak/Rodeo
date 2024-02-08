import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connecte to mongodb connected to: ${conn.connection.host}`);
  } catch (error) {
    console.log("Mongo Connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
