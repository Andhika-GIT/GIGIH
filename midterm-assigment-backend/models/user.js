const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "please enter your email"],
    validate: {
      validator: function (val) {
        return validator.isEmail(val);
      },
      message: "please enter a valid email",
    },
  },
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    minlength: 8,
  },
  photo: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
