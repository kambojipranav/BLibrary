import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
    const [book, setBook] = useState({
        Book_Name: '',
        Book_ID: '',
        Publisher_Number: '',
        Date_of_Publication: '',
        No_of_Pages: '',
        Year_of_Publication: '',
        Cost: ''
    });

    // A state to provide feedback to the user
    const [message, setMessage] = useState('');

    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        // Basic frontend validation
        for (const key in book) {
            if (book[key] === '') {
                setMessage(`Error: Field '${key}' cannot be empty.`);
                return; // Stop the submission
            }
        }

        axios.post('http://localhost:5000/books/add', book)
            .then(res => {
                console.log(res.data);
                setMessage('Book added successfully!');
                // Clear the form after successful submission
                setBook({
                    Book_Name: '',
                    Book_ID: '',
                    Publisher_Number: '',
                    Date_of_Publication: '',
                    No_of_Pages: '',
                    Year_of_Publication: '',
                    Cost: ''
                });
            })
            .catch(err => {
                // Display a more helpful error from the backend if available
                if (err.response) {
                    console.error("Error response:", err.response.data);
                    setMessage(`Error: ${err.response.data}`);
                } else {
                    console.error("Error:", err.message);
                    setMessage('An error occurred. Please try again.');
                }
            });
    };

    return (
        <div className="container">
            <h2 className='AddNewBook'>Add New Book</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Book Name</label>
                    <input type="text" name="Book_Name" value={book.Book_Name} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Book ID</label>
                    <input type="text" name="Book_ID" value={book.Book_ID} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Publisher Number</label>
                    <input type="text" name="Publisher_Number" value={book.Publisher_Number} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Date of Publication</label>
                    {/* Use type="date" for a better user experience and format consistency */}
                    <input type="date" name="Date_of_Publication" value={book.Date_of_Publication} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Number of Pages</label>
                    {/* Use type="number" to ensure a numeric value is entered */}
                    <input type="number" name="No_of_Pages" value={book.No_of_Pages} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Year of Publication</label>
                    <input type="number" name="Year_of_Publication" value={book.Year_of_Publication} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Cost</label>
                    <input type="number" name="Cost" value={book.Cost} onChange={onChange} required />
                </div>
                <button type="submit">Add Book</button>
            </form>
            {/* Display success or error messages to the user */}
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddBook;