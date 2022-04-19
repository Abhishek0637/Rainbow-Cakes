import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, "A user name must have less or equal then 20 characters"],
    minlength: [5, "A user name must have more or equal then 5 characters"],
  },

  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    trim: true,
    required: true,
    maxlength: [20, "password cannot be greater then 20 character"],
    minlength: [5, "password cannot be less than 5 character"],
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxlength: [
      100,
      "A user address must have less or equal then 100 characters",
    ],
    minlength: [
      10,
      "A user address must have more or equal then 10 characters",
    ],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  joinAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
