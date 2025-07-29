import { useEffect } from "react";
import AddBookForm from "./AddBookForm";

function AddBook(){

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
 
    return(
        <>
        <AddBookForm/>
        </> 
    )
}

export default AddBook;