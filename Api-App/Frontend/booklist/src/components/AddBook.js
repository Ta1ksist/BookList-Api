import React from "react";
import { useLocation } from "react-router-dom";


function AddBook() {
    const location = useLocation();
    return(
       <>
        <h1>Add Book Page</h1>
       </>
    );
}

export default AddBook;