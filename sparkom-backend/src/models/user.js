const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

//********************************** User Schema ***********************************************//
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      lowercase: true,
      minLength: 3,
      maxLength: 13,
      validate(value) {
        if (!validator.isAlpha(value))
          throw new Error("firstName Must Contain Only letters ");
      },
    },
    lastname: {
      type: String,
      required: true,
      lowercase: true,
      minLength: 3,
      maxLength: 13,
      validate(value) {
        if (!validator.isAlpha(value))
          throw new Error("lastName Must Contain Only Caracters");
      },
    },
    username: {
      type: String,
      unique: true,
      minLength: 4,
      maxLength: 15,
      default: `${this.firstname} ${this.lastname}`,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) throw new Error("Email is invalid");
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: [7, "Weak Password"],
    },
    avatar: Buffer,
    phone: {
      type: Number,
      validate(value) {
        if (!validator.isMobilePhone(value + ""))
          throw new Error("invalid Phone Number");
      },
    },
    date_of_birth: { type: Date, max: "2012-01-01" },
    is_blocked: { type: Boolean, default: false },
    is_admin: { type: Boolean, default: false },
    gender: { type: String, enum: ["f", "m"] },
    // tokens: [
    //   {
    //     token: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

//************ Adding mongoose Middleware to hash users passwords before saving *****************//

userSchema.pre("save", async function (next) {
  //check if the password of the instance(document) is already hashed or no
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

//! *************************** deleting  private data before sending it back  *****************//

//toJSON called before any instance(document) of User is transformed to json Data to be sent back
//before JSON.stringify(user)
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.tokens;
  delete userObject.is_admin;
};

//********************************** Compile User Model *****************************************//
const User = mongoose.model("User", userSchema);

module.exports = User;
