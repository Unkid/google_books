import React from "react";
import BookSelector from "../bookSelector/BookSelector";
import './bookSearch.css'


const BookSearch = ({filter, setFilter, searchHandler, isLoading}) => {   
    
    const enterDown = (e)=>{
        if (e.keyCode === 13)
            searchHandler(filter.query)
    }

    return (
        <div className="bookSearch">
            <h1>Google books search</h1>
            <input className="bookInput" 
                value={filter.query}
                onChange={e=> setFilter({
                    ...filter,
                    query: e.target.value
                })}
                placeholder='Поиск...'
                onKeyDown={(e)=>enterDown(e)} />
            <div className="selectors">
            <BookSelector value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})} 
                defaultValue='Sort by'               
                options={[,
                {value: 'relevance', name:'relevance'},
                {value: 'newest', name:'newest'},
                ]}/>
            <BookSelector value={filter.categorie}
                onChange={selectedCat => setFilter({...filter, categorie:selectedCat})} 
                defaultValue='Filter by'               
                options={[,
                {value: 'all', name:'all'},
                {value: 'art', name:'art'},
                {value: 'biography', name:'biography'},
                {value: 'computers', name:'computers'},
                {value: 'history', name:'history'},
                {value: 'medical', name:'medical'},
                {value: 'poetry', name:'poetry'},
                ]}/>
            </div>
            <div className='bookButton'>
                <button className='btnSearch' onClick={()=>searchHandler(filter)}>Search</button>
                <div className='circleWrapper'>
                    {isLoading && <div className="circle"></div>}    
                </div> 
            </div>
        </div>
    )
}

export default BookSearch