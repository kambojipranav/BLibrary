import React, { useState } from 'react';
import axios from 'axios';

function SearchBook() {
    const [bookID, setBookID] = useState('');
    const [bookDetails, setBookDetails] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:5000/books/${bookID}`)
            .then(res => {
                if (res.data) {
                    setBookDetails(JSON.stringify(res.data, null, 2));
                    setError('');
                } else {
                    setError('Book not found!');
                    setBookDetails('');
                }
            })
            .catch(err => {
                setError('Error searching for book!');
                setBookDetails('');
            });
    };

    return (
        <div className="container">
            <h2>Search Book</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Book ID</label>
                    <input type="text" value={bookID} onChange={(e) => setBookID(e.target.value)} required />
                </div>
                <button type="submit">Search</button>
            </form>
            <textarea value={bookDetails || error} readOnly />
        </div>
    );
}

export default SearchBook;
