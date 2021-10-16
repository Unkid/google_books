import { setBooks, setIsLoading, moreBooks, setOneLoading } from "../reducers/booksReducer"
import axios from "axios"
import { setError, setFetching } from "../reducers/errorReducer"

const apiKey = 'AIzaSyA9OMfHksllCI0c5Bbi1RHlyJzlVSpuIFs'

export const getBooks = (filter,perPage) => {
    return async (dispatch) => {
        try{
            if (filter.query){            
                dispatch(setFetching(false))
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
            else {      
                dispatch(setFetching(false))
                dispatch(setBooks({items:[], totalItem:0}))
            }     
        }
        catch(e){
            dispatch(setIsLoading(false))
            dispatch(setError(e.message))
        }    
    }    
}

export const getMoreBooks = (filter, currentPage, perPage)=>{
    return async (dispatch) => {    
        try {
            if (filter.query){
                dispatch(setFetching(false))
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
            else {
                dispatch(setFetching(false))
                dispatch(setBooks({items:[], totalItem:0}))
            }           
        }
        catch(e){
            dispatch(setIsLoading(false))
            dispatch(setError(e.message))
        }                     
    }    
}

export const getBook = (bookId, setBook) => {
    return async (dispatch)=> {
        try{
            dispatch(setFetching(false))
            dispatch(setOneLoading(true))        
            const request = `https://www.googleapis.com/books/v1/volumes/${bookId}`        
            const response = await axios.get(request)
            setBook(response.data)   
            dispatch(setOneLoading(false))
        }
        catch(e){
            dispatch(setOneLoading(false))
            dispatch(setError(e.message))
        }
        
    }          
}