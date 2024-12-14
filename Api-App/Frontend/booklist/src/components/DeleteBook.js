import React from "react";
import { useLocation } from "react-router-dom";


export default function DeleteBook() {
    const location = useLocation();
    return(
       <>
        <h1>Delete Book Page</h1>
       </>
    );
}