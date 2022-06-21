import { useState, useEffect } from 'react'
import article from '../content/data'
import '../styles/search-bar-component.css'
import icon from "../content/images/card-images/icon-links/searchSVG.svg"


const SearchBar = (props) => {
    
    const sectionTitle = props.title.toLowerCase()
   
    const [titleArray, setTitleSearch] = useState()

        useEffect(()=>{
            let savedTitles = []

            article[sectionTitle].forEach(element => {
                savedTitles.push(element.title)
            });

            setTitleSearch(savedTitles)
        },[sectionTitle])


    const [searchValue, setSearchValue] = useState('')
        const handleSearch = (event) => {
            setSearchValue(event.target.value)
            search()
        }
        
      
    
    function search() {
        console.log(titleArray.filter(item => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1))
    }



    return (
        <div className ='search-wrapper'>
            <div className='search-container'>
                <img className = 'search-icon' src = {icon} height = {30} alt = 'search icon'/>
                <p className = 'search-section-title'>{`${sectionTitle}:`}</p>
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