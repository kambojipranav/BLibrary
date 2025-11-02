import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage() {
    return (
        <div>
            <h1>TOM & JERRY Library</h1>
            <nav>
                <Link className='AddBook' to="/add">Add Book</Link>
                <Link to="/search">Search Book</Link>
                <Link to="/display">Display Books</Link>
            </nav>
        </div>
    );
}

export default HomePage;
