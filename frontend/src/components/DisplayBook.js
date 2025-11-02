import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayBook() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/books/')
            .then(response => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="container">
            <h2>All Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Book ID</th>
                        {/* ... other table headers ... */}
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.Book_ID}>
                            <td>{book.Book_Name}</td>
                            <td>{book.Book_ID}</td>
                            {/* ... other table data ... */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayBook;
