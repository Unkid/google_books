import React from "react";
import './bookCard.css'

const BookCard = ({book}) => {

    return (
        <div className="bookCard">
        <div className="bookHeader">
            {book.volumeInfo.title.length<40 ?
            book.volumeInfo.title
            :
            book.volumeInfo.title.slice(0, 40)+'...'}
        </div>
            <div className="bookContent">
                    <img src={book.volumeInfo.imageLinks.thumbnail} style={{height: '150px' }} alt='alternate text'/>
                    <div className="filmText">
                        {book.volumeInfo.authors?
                        book.volumeInfo.authors.map(author => 
                            <p className="filmAbout">{author}</p>
                        ):
                        <p className="filmAbout">Автора нет</p>
                        }
                                          
                    </div>                            
            </div>
        </div>
    )
}

export default BookCard;