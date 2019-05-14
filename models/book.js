const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    authors: { type: [String], required: false },
    link: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    googleId: { type: String, required: true }
  });
   console.log("BOOK-Model");
  const Book = mongoose.model("Book", bookSchema);
  
  module.exports = Book;