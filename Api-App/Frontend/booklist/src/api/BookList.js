import React, { useEffect, useState } from 'react';
import { getBooks } from "./api";


export default function BookList() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks().then(setBooks).catch(console.error);
    },[]);
    return (
        <div>
        <ul>
            {books.map(book => (
                <>{book.title}<br></br>{book.description}<br></br>{book.author}<br></br>{book.year}</>
            ))}
        </ul>
    </div>
    );
}