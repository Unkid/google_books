import booksReducer, { setBooks, setIsLoading, moreBooks, setOneLoading } from "../reducers/booksReducer"
import axios from "axios"

const apiKey = 'AIzaSyA9OMfHksllCI0c5Bbi1RHlyJzlVSpuIFs'

export const getBooks = (filter,perPage) => {
    if (filter.query){
        return async (dispatch) => {
            dispatch(setIsLoading(true))
            const sort = '&orderBy='+ filter.sort
            let categorie = ''
            if (filter.categorie!= 'all')
                categorie = '+subject:'+filter.categorie
            const startIndex = 0
            const request = `https://www.googleapis.com/books/v1/volumes?q=${filter.query}${categorie}&startIndex=${startIndex}${sort}&maxResults=${perPage}&key=${apiKey}`
            const response = await axios.get(request)
            dispatch(setBooks(response.data))
        }            
    }
    return (dispatch)=>
        dispatch(setBooks({items:[], totalItem:0}))
}

export const getMoreBooks = (filter, currentPage, perPage)=>{
    if (filter.query){
        return async (dispatch) => {
            dispatch(setIsLoading(true))
            const sort = '&orderBy='+ filter.sort  
            const startIndex = (currentPage-1)*perPage
            let categorie = ''          
            if (filter.categorie!= 'all')
                categorie = '+subject:'+filter.categorie
            const request = `https://www.googleapis.com/books/v1/volumes?q=${filter.query}${categorie}${sort}&startIndex=${startIndex}&maxResults=30&key=${apiKey}`
            const response = await axios.get(request)
            dispatch(moreBooks(response.data))            
        }            
    }
    return async (dispatch)=>{            
        dispatch(setBooks({items:[], totalItem:0}))
    }
}

export const getBook = (bookId, setBook) => {
    return async (dispatch)=> {
        dispatch(setOneLoading(true))        
        const request = `https://www.googleapis.com/books/v1/volumes/${bookId}`        
        const response = await axios.get(request)
        setBook(response.data)   
        dispatch(setOneLoading(false))
    }          
}