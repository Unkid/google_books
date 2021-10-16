const SET_ERROR = 'SET_ERROR'
const SET_FETCHING = 'SET_FETCHING'

const defaultState ={
    isFetchError : false,
    errorMessage : ''
}

export default function errorReducer(state = defaultState, action) {
    switch (action.type){
        case SET_ERROR:
        return{
            ...state, 
            isFetchError: true,
            errorMessage: action.payload
        }
       case SET_FETCHING:
           return{
               ...state,
               isFetchError: action.payload
           }
        default:
            return state
    }
}

export const setError = (message) => ({type:SET_ERROR, payload:message})
export const setFetching = (bool) => ({type:SET_FETCHING, payload:bool})