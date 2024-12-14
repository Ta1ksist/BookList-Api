import React, { useEffect, useState } from 'react';
import { getBooks } from "/Users/izzatmelikov/Desktop/BookList-Api/Api-App/Frontend/booklist/src/api/api.js";
import Button from 'react-bootstrap/Button';
import '/Users/izzatmelikov/Desktop/BookList-Api/Api-App/Frontend/booklist/src/componentsStyles/Home.css';


function Home() {
    const [books, setBooks] = useState([]);
        useEffect(() => {
            getBooks().then(setBooks).catch(console.error);
        },[]);
    return(
       <>
        <h1 class="main-h1">BookList</h1>
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {books.map((book,index) => (
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.description}</td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>
                        <td>
                            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                                <Button type="sumbit" class="btn btn-primary">Update</Button>
                                <Button type="sumbit" class="btn btn-primary">Delete</Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
       </>
    );
}

export default Home;