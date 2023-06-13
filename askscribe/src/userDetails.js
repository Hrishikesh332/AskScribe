// const mongoose = require("mongoose");

import mongoose from "mongoose";

const UserDetailsScehma = new mongoose.Schema(
  {
    fusername: String,
    femail: { type: String, unique: true },
    fpassword: String,
  },
  {
    collection: "users",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);

// export default UserDetailsScehma;