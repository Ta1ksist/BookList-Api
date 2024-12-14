import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '/Users/izzatmelikov/Desktop/BookList-Api/Api-App/Frontend/booklist/src/componentsStyles/AddBook.css';
import Button from 'react-bootstrap/Button';
import { getBooks } from "/Users/izzatmelikov/Desktop/BookList-Api/Api-App/Frontend/booklist/src/api/api.js";
import Form from 'react-bootstrap/Form';

function AddBook() {
    const [books, setBooks] = useState([]);
            useEffect(() => {
                getBooks().then(setBooks).catch(console.error);
            },[]);
    const location = useLocation();
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
    const { name, value } = e.target;
    setBooks({
      ...books,
      [name]: value
    });
    };
    const validateForm = () => {
        let tempErrors = {};
        if (!books.title) tempErrors.title = 'Title is required.';
        if (!books.author) tempErrors.author = 'Author is required.';
        if (!books.year) tempErrors.year = 'Year is required.';
        else if(isNaN(books.year)) tempErrors.year = 'Year must be a number.';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Book data submitted:', books);
          setBooks({
            title: '',
            description: '',
            author: '',
            year: ''
          });
          setErrors({});
        }
      };
    return(
       <>
        <h1 class="main-h1">Add Book</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={books.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                {errors.title && <span className="text-danger">{errors.title}</span>}
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={books.description}
                    onChange={handleChange}
                    placeholder="Descrption"
                />
                {errors.description && <span className="text-danger">{errors.description}</span>}
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    name="author"
                    value={books.author}
                    onChange={handleChange}
                    placeholder="Author"
                />
                {errors.author && <span className="text-danger">{errors.author}</span>}
            </div>
            <div className="form-group">
                <input
                    type="number"
                    className="form-control"
                    name="year"
                    value={books.year}
                    onChange={handleChange}
                    placeholder="Year"
                />
                {errors.year && <span className="text-danger">{errors.year}</span>}
            </div>
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                <Button type="sumbit" class="btn btn-primary">Add</Button>
                <Button type="sumbit" class="btn btn-primary">Back</Button>
            </div>
        </form>
        </>
    );
}

export default AddBook;