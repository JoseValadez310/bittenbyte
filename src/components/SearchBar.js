import { useState, useEffect } from 'react'
import article from '../content/data'
import '../styles/search-bar-component.css'
import icon from "../content/images/card-images/icon-links/searchSVG.svg"


const SearchBar = (props) => {
    // if a different tab has been selected, erase search bar value 

    console.log(' page load ')
    const sectionTitle = props.title.toLowerCase()
    
    
        const [arrayTitles, setArrayTitle] = useState()
            useEffect(()=>{
                console.log(' triggered refresh in first useEffect')
                let arrayPlaceholder = []

                article[sectionTitle].forEach(element => {
                    arrayPlaceholder.push(element.title)
                });

                setArrayTitle(arrayPlaceholder)
                setSearchValue('')
            },[sectionTitle])


        const [searchValue, setSearchValue] = useState('')
            const handleSearch = (event) => {
                if(event.target.value !== ' ') {
                    setSearchValue(event.target.value)
                }
            }

        const [results, setResults] = useState()

            useEffect (() => {
                console.log(' grabbing results ')
                setResults( search() )
            }, [searchValue])
            
            
            function search() {
                if (arrayTitles !== undefined){
                    return arrayTitles.filter(item => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
                }
            }

    return (
        <div className ='search-wrapper'>
            <div className='search-container'>
                <img className = 'search-icon' src = {icon} height = {20} alt = 'search icon'/>
                <p className = 'search-section-title'>{`${sectionTitle}:`}</p>
                <input 
                    className = 'searchBar' 
                    type = 'text' placeholder = 'Search an Article' 
                    onChange = {handleSearch} 
                    value = {searchValue} 
                />        
            </div> 
                { results !== undefined && searchValue.length !== 0 ? 
                    results.map(item => <p className = 'search-result'>{item}</p>) : null 
                    }
            
     
        </div> 
    )
}

export default SearchBar