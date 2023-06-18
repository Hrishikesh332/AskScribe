// const mongoose = require("mongoose");

import mongoose from "mongoose";

const ImageDetailsSchema = new mongoose.Schema(
  {
    pdf:String
  },
  {
    collection: "pdfdetails",
  }
);

mongoose.model("PdfDetails", ImageDetailsSchema);

// export default UserDetailsScehma;