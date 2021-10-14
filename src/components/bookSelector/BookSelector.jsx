import React from "react";
import './bookSelector.css'

const BookSelector = ({options, defaultValue, value, onChange}) => {
    console.log(onChange)
    return(
        <select className="bookSelect" 
        value={value}
        onChange={e => onChange(e.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default BookSelector