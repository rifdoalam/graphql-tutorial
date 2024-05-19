const mongoose = require("mongoose")
const BookSchema = new mongoose.Schema({
    title : String,
    author: String,
    description: String,
    realese_year : Number,
    genre: String
})
const Book = mongoose.model('Book', BookSchema);
module.exports = Book