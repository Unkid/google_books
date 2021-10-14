const SET_BOOKS = "SET_BOOKS"
const SET_IS_LOADING = "SET_IS_LOADING"


const defaultState= {
    items: [],
    isLoading: false
}

export default function booksReducer(state=defaultState, action){
    switch (action.type){
        case SET_BOOKS:
            return{
                ...state,
                items: action.payload.items,
                isLoading: false
            }
        case SET_IS_LOADING:
            return{
                ...state,
                isLoading: action.payload
            }

        default:
            return state

    }
}
export const setBooks = (books) => ({type: SET_BOOKS, payload: books})
export const setIsLoading = (bool) => ({type:SET_IS_LOADING, payload:bool})