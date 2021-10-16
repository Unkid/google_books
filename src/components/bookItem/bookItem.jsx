import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getBook } from "../../actions/books";
import './bookItem.css'


const BookItem = () => {
    const dispatch = useDispatch()
    const {bookId} = useParams()    
    const [book, setBook] = useState([])
    const isLoading = useSelector(state => state.books.oneIsLoading)

    useEffect(()=>{ 

        dispatch(getBook(bookId, setBook))                
    }, [])
      
    console.log(book)
    console.log(isLoading)
    return(
        <div className="bookContainer">
            {isLoading ?
                <p>Загрузка</p>
            :
                book!=false &&
                    <div className='bookItem'>
                     <div className="bookImg">
                        {book.volumeInfo.imageLinks?
                            <img src={book.volumeInfo.imageLinks.medium} alt='alternate text'/>
                        :
                            <img src={'/images/default.jpg'} alt='alternate text'/>}
                    </div>
                    <div className="itemContent">
                        <h2 className="itemTitle">Title: {book.volumeInfo.title}</h2>                        
                        <div className="itemAbout">Description: {book.volumeInfo.description}</div>
                        {book.volumeInfo.authors?
                            <p className="itemAbout">Authors: {book.volumeInfo.authors.join(', ')}</p>
                        :
                            <p className="itemAbout">Authors: </p>
                        }  
                        {book.volumeInfo.categories?
                            <p className="itemAbout">Categories: {book.volumeInfo.categories.join(', ')}</p>
                        :
                            <p className="itemAbout">Categoriess: </p>
                        }                  
                    </div> 
                </div>
        }
            
        </div>
    )
}


export default BookItem