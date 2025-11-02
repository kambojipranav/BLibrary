import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DisplayBook from './components/DisplayBook';

function App() {
    return (
        <Router>
            <HomePage />
            <Routes>
                <Route path="/add" element={<AddBook />} />
                <Route path="/search" element={<SearchBook />} />
                <Route path="/display" element={<DisplayBook />} />
            </Routes>
        </Router>
    );
}

export default App;
