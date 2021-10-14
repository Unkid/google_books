import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getBooks } from '../../actions/books';
import BookCard from '../bookCard/BookCard';
import BookSearch from '../bookSearch/BookSearch';
import './main.css'



const Main = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.items)
    const isLoading = useSelector(state => state.books.isLoading)
    const [filter, setFilter] = useState({query:'', sort:'relevance', categorie:'' })
    console.log(books)


    function searchHandler(filter){
        if (filter.query)        
            dispatch(getBooks(filter))
    }
    
    return (
        <div className='container'>
            <BookSearch filter={filter} searchHandler={searchHandler} setFilter={setFilter}/>            
            {isLoading ?
            <div className='circle'></div>
            :
            <div className='bookList'>
            {books.map(book => <BookCard key={book.id} book={book}/>)}
            </div>               
            }
        </div>
    );
};

export default Main;