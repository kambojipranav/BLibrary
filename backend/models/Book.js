const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    Book_Name: { type: String, required: true },
    Book_ID: { type: String, required: true, unique: true },
    Publisher_Number: { type: String, required: true },
    Date_of_Publication: { type: Date, required: true },
    No_of_Pages: { type: Number, required: true },
    Year_of_Publication: { type: Number, required: true },
    Cost: { type: Number, required: true },
}, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
