import { setBooks, setIsLoading, moreBooks } from "../reducers/booksReducer"
import axios from "axios"

const apiKey = 'AIzaSyA9OMfHksllCI0c5Bbi1RHlyJzlVSpuIFs'

export const getBooks = (filter) => {
    if (filter.query){
        return async (dispatch) => {
            dispatch(setIsLoading(true))
            const sort = '&orderBy='+ filter.sort
            let categorie = ''
            if (filter.categorie!= 'all')
                categorie = '+subject:'+filter.categorie
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${filter.query}${categorie}${sort}&maxResults=30&key=${apiKey}`)
            console.log(response.data)
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
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${filter.query}${categorie}${sort}&maxResults=30&key=${apiKey}`)
            console.log(response.data)
            dispatch(moreBooks(response.data))            
        }            
    }
    return async (dispatch)=>{            
        dispatch(setBooks({items:[], totalItem:0}))
    }
        

}