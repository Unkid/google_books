import React from "react";
import BookCard from "../bookCard/BookCard";

const BookList = ({books}) => {
    if (books==false){
        return (
            <p className='pSelect'>Таких книг нет(</p>
                
        )
    }    
    return (
        <div className='bookList'>       
            {books.map((book)=> <BookCard book={book} key={book.etag}/>)}       
        
        
        </div>  
    )
}


export default BookList;