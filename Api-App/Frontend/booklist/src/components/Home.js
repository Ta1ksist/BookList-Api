import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { getBooks } from "/Users/izzatmelikov/Desktop/BookList-Api/Api-App/Frontend/booklist/src/api/api.js";


function Home() {
    const [books, setBooks] = useState([]);
        useEffect(() => {
            getBooks().then(setBooks).catch(console.error);
        },[]);
    return(
       <>
        <h1 class="home-h1">BookList</h1>
        <table>
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Author
                    </th>
                    <th>
                        Year
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book,index) => (
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.description}</td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
       </>
    );
}

export default Home;