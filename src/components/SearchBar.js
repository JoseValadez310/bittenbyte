import { useState } from 'react'
import article from '../content/data'
import '../styles/search-bar-component.css'
import icon from "../content/images/card-images/icon-links/searchSVG.svg"


const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (event) => {
        setSearchValue(event.target.value)
        }

    console.log(article)


    return (
        <div className ='search-wrapper'>
            <div className='search-container'>
                <img className = 'search-icon' src = {icon} height = {30} alt = 'search icon'/>
                <span className = 'search-section'>{props.sectionID} :</span>
                <input 
                    className = 'searchBar' 
                    type = 'text' placeholder = 'Search an Article' 
                    onChange = {handleSearch} 
                    value = {searchValue} 
                />        
            </div> 
            <h2>The result of searching will follow this a form that'll go here</h2>
        </div> 
    )
}

export default SearchBar