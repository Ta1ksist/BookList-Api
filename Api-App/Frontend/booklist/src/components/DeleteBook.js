import React from "react";
import { useLocation } from "react-router-dom";


function DeleteBook() {
    const location = useLocation();
    return(
       <>
        <h1>Delete Book Page</h1>
       </>
    );
}

export default DeleteBook;