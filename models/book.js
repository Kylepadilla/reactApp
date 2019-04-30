const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String},
  subtitle: { type: String},
  authors: { type: String},
  rating: { type: String},
  printType: { type: String},
  infoLink: { type: String},
  pageCount: { type: String},
  lang: { type: String },
  description: { type: String },
  publishedDate: { type: String },
  sale: { type: String },
  publisher: { type: String },

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
