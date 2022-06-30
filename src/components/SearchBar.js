import { useState, useEffect } from 'react'
import article from '../content/data'
import '../styles/search-bar-component.css'
import icon from "../content/images/card-images/icon-links/searchSVG.svg"
import { Link } from 'react-router-dom'


const SearchBar = (props) => {
    // if a different tab has been selected, erase search bar value 
    // title => section title 
    console.log(' page load ')
    const sectionTitle = props.title.toLowerCase()
        
        const [arrayTitles, setArrayTitle] = useState()
            useEffect(()=>{
                console.log(' triggered refresh in first useEffect')
                let arrayPlaceholder = []

                let i = 0

                article[sectionTitle].forEach(element => {
                    arrayPlaceholder.push([element.title, i++])
                
                } );

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
                    return arrayTitles.filter(item => item[0].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
                }
            }
console.log(results)
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
                    results.map(item => <p className = 'search-result'><Link onClick = {() => props.PassThroughDetails(sectionTitle, item[1] )} to ='/Article'>{item[0]}</Link></p>) : null 
                    }
            
     
        </div> 
    )
}

export default SearchBar