import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getMoreBooks, getBooks } from '../../actions/books';
import { setCurrentPage } from '../../reducers/booksReducer';
import BookList from '../bookList/BookList';
import BookSearch from '../bookSearch/BookSearch';
import './main.css'



const Main = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.items)
    const totalItems = useSelector(state => state.books.totalCount)
    const perPage = useSelector(state => state.books.perPage)
    const currentPage = useSelector(state => state.books.currentPage)
    const isLoading = useSelector(state => state.books.isLoading)
    const [filter, setFilter] = useState({query:'', sort:'relevance', categorie:'all' })
    const totalPages = Math.ceil(totalItems/perPage)
    
    
    useEffect(()=> {
        dispatch(getMoreBooks(filter, currentPage, perPage))
    },[currentPage])

    function searchHandler(){
        dispatch(setCurrentPage(1))
        if (filter.query)        
            dispatch(getBooks(filter))
    }
    console.log(books)
    
    return (
        <div className='container'>
            <BookSearch filter={filter} searchHandler={searchHandler} setFilter={setFilter} isLoading={isLoading}/>            
            <BookList books={books} isLoading={isLoading} totalPages={totalPages} currentPage={currentPage}/>                        
            
            {totalPages !== currentPage && totalPages &&
            <button className="btn-load-more" onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
            {isLoading ? 
            'Loading...' : 'Load More'}</button>}
        </div>
    );
};

export default Main;