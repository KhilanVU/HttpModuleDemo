var mongoose = require('mongoose');

//Book Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    publisher: {
        type: String
    },
    author: {
        type: String
    },
    pages: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// export to use this in some other file
var Book = module.exports = mongoose.model('Books', bookSchema);

//Get Books
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

//Get Book by ID
module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

//Add Book
module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
}