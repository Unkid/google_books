import React from "react";
import './bookCard.css'

const BookCard = ({book}) => {

    return (
        <div className="bookCard">
        <div className="bookHeader">
            <p>{book.volumeInfo.title}</p>
        </div>
            <div className="bookContent">
                <div className='imgWrapper'>
                    {book.volumeInfo.imageLinks?
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt='alternate text'/>
                    :
                    <img src={'/images/default.jpg'} alt='alternate text'/>}
                    
                </div>                    
                <div className="bookText">
                    <div className='bookAuthors'>
                        {book.volumeInfo.authors?
                        <p className="bookAbout">{book.volumeInfo.authors.join(', ')}</p>
                        :
                        <p className="bookAbout">-</p>
                        }
                    </div>
                    <div className='bookCategories'>
                        {book.volumeInfo.categories?
                        <p className="bookAbout">{book.volumeInfo.categories[0]}</p>
                        :
                        <p className="bookAbout">-</p>
                        }
                    </div>                                        
                </div>                            
            </div>
        </div>
    )
}

export default BookCard;