import mongoose from "mongoose";
import Payment from "./paymentModel.js";
import bcrypt from "bcryptjs";

// TODO, add a flag to determine if user wants to be visible to other users or not
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userType: {
      // someone who is a supporter or not
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    image: {
      type: String,
      required: false,
    },
    backGround: {
      type: String,
      required: false,
      unique: false,
    },
    patricipatedEvents: [],
    paymentsRecieved: [],
    paymentsSent: [],
    supporters: [],
    supporting: [],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  //only continue is the passwword is being modified
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
