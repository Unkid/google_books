const SET_BOOKS = "SET_BOOKS"
const SET_IS_LOADING = "SET_IS_LOADING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const GET_MORE_BOOKS = "GET_MORE_BOOKS"
const SET_LOADING = "SET_LOADING"

const defaultState= {
    items: [],
    oneIsLoading: true,
    isLoading: false,    
    totalCount:0,
    currentPage:1,
    perPage:30
}

export default function booksReducer(state=defaultState, action){
    switch (action.type){
        case SET_BOOKS:
            return{
                ...state,
                items:  action.payload.items,
                totalCount: action.payload.totalItems,
                isLoading: false
            }
        case SET_LOADING:
            return{
                ...state,
                oneIsLoading: action.payload
            }
        case SET_IS_LOADING:
            return{
                ...state,
                isLoading: action.payload
            }        
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        case GET_MORE_BOOKS:
            return{
                ...state,
                items: [...state.items, ...action.payload.items],
                totalCount: action.payload.totalItems,
                isLoading: false
            }     

        default:
            return state

    }
}
export const setBooks = (books) => ({type: SET_BOOKS, payload: books})
export const setIsLoading = (bool) => ({type:SET_IS_LOADING, payload:bool})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload:page})
export const moreBooks = (books) => ({type: GET_MORE_BOOKS, payload:books})
export const setOneLoading = (bool) => ({type:SET_LOADING, payload:bool})