import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from 'react-router';
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
    const errors = useSelector(state => state.errors.isFetchError)
    const [filter, setFilter] = useState({query:'', sort:'relevance', categorie:'all' })
    const totalPages = Math.ceil(totalItems/perPage)   
    
    useEffect(()=> {
        dispatch(getMoreBooks(filter, currentPage, perPage))
    },[currentPage])

    function searchHandler(){
        dispatch(setCurrentPage(1))
        if (filter.query)        
            dispatch(getBooks(filter, perPage))
    }

    function pageHandler(){
        dispatch(setCurrentPage(currentPage + 1))
    }

    if (errors) 
        return <Redirect to='/error' />
    
    return (
        <div className='container'>
            <BookSearch filter={filter} searchHandler={searchHandler} setFilter={setFilter} isLoading={isLoading}/>            
            <BookList books={books} isLoading={isLoading} onClick={pageHandler} totalPages={totalPages} currentPage={currentPage}/>                        
        </div>
    );
};

export default Main;