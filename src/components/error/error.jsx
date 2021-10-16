import React from "react";
import { useSelector } from "react-redux";
import './error.css'

const Error = (props) => {
    const error = useSelector(state => state.errors.errorMessage)
    return(
        <div className="errorContainer">
            <div className='errorItem'>
                <h1>{error}</h1>
                <button className="errorButton" onClick={() => props.history.push('/')}>Back</button>
            </div>
            
        </div>
    )
}

export default Error