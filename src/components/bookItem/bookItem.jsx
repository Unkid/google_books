import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getBook } from "../../actions/books";


const BookItem = () => {
    const dispatch = useDispatch()
    const {bookId} = useParams()    
    const [book, setBook] = useState([])
    const isLoading = useSelector(state => state.books.oneIsLoading)

    useEffect(()=>{ 
        dispatch(getBook(bookId, setBook))                
    }, [])
      
    console.log(book)
    return(
        <div className="container">
            {isLoading ?
                <p>Загрузка</p>
            :
                <div className='bookItem'>
                    <p>{book.volumeInfo.title}</p>
                    {book.volumeInfo.imageLinks?
                    <img src={book.volumeInfo.imageLinks.small} alt='alternate text'/>
                    :
                    <img src={'/images/default.jpg'} alt='alternate text'/>}
                    <p>{book.volumeInfo.description}</p>
                </div>
        }
            
        </div>
    )
}


export default BookItem