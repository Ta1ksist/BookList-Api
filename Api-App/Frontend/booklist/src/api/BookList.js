import React, { useEffect, useState } from 'react';
import { getBooks } from "./api";

function BookList() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks().then(setBooks).catch(console.error);
    },[]);
    return (
        <div>
        <ul>
            {books.map(book => (
                <><li key={book.id}>{book.title}</li><li>{book.description}</li><li>{book.author}</li><li>{book.year}</li></>
            ))}
        </ul>
    </div>
    );
}

export default BookList;