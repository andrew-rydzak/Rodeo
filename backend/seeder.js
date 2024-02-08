import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import User from "./models/userModel.js";
import Payment from "./models/paymentModel.js";
import connectDB from "./config/db.js";

// npm run data:import
dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await Payment.deleteMany();
    await User.deleteMany();

    await User.insertMany(users);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`There was an error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await Payment.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
