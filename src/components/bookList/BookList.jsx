import React from "react";
import BookCard from "../bookCard/BookCard";
import './booksList.css'

const BookList = ({books, onClick,totalPages, currentPage, isLoading}) => {
    if (books==false){
        return (
            <div className="bookNotFound">
                <img src='/images/notFound.png' />
                <h2>No books found yet</h2>
            </div>                
        )
    }    
    return (
        <div className='container'>
            <div className='bookList'>       
                {books.map((book)=> <BookCard book={book} key={book.etag}/>)}            
            </div>
            {totalPages !== currentPage &&                
            <button className="btnLoadMore" onClick={()=> onClick()}>
            {isLoading ? 
            'Loading...' : 'Load More'}</button>} 
        </div>  
    )
}


export default BookList;