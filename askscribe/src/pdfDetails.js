// const mongoose = require("mongoose");

import mongoose from "mongoose";

const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: Array,
    femail: { type: String, unique: true },
  },
  {
    collection: "pdfdetails",
  }
);

mongoose.model("PdfDetails", PdfDetailsSchema);

// export default UserDetailsScehma;