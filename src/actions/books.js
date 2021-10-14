import { setBooks, setIsLoading } from "../reducers/booksReducer"
import axios from "axios"

const apiKey = 'AIzaSyA9OMfHksllCI0c5Bbi1RHlyJzlVSpuIFs'

export const getBooks = (filter) => {
    if (filter.query){
        return async (dispatch) => {
        dispatch(setIsLoading(true))
        const sort = '&orderBy='+ filter.sort
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${filter.query}${sort}&maxResults=30&key=${apiKey}`)
        dispatch(setBooks(response.data))
        }            
    }
}