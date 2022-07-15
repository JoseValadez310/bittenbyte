import { useState, useEffect } from 'react'
import article from '../content/data'
import '../styles/search-bar-component.css'
import icon from "../content/images/card-images/icon-links/searchSVG.svg"
import { Link } from 'react-router-dom'


import technology from "../content/images/technology-hero.jpg"
import food from "../content/images/food-hero.jpg"
import hobby from "../content/images/hobby-hero.jpg"

const SearchBar = (props) => {
    // if a different tab has been selected, erase search bar value 
    // title => section title 
   
    const tab = props.tab.toLowerCase()
    let tabHero
        const [arrayTitles, setArrayTitle] = useState()
            useEffect(()=>{
                let arrayPlaceholder = []
                let i = 0

                article[tab].forEach(element => {
                    arrayPlaceholder.push([element.title, i++])
                
                } );

                setArrayTitle(arrayPlaceholder)
                setSearchValue('')
                
            },[tab])

            if(tab === 'technology'){
                tabHero = technology
            } else if(tab === 'hobby') {
                tabHero = hobby
            } else {
                tabHero = food 
            }

        const [searchValue, setSearchValue] = useState('')
            const handleSearch = (event) => {
                if(event.target.value !== ' ') {
                    setSearchValue(event.target.value)
                }
            }

        const [results, setResults] = useState()

            useEffect (() => {
                let finalValue
                    if (arrayTitles !== undefined){
                        finalValue = arrayTitles.filter(item => item[0].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
                    }
                setResults( finalValue )
            }, [searchValue])

    return (
        <div className ='search-wrapper'>
            <div className = 'hero-search-wrapper'>
                <img className = 'tab-hero-section' src = {tabHero} alt = "hero for current tab section" />
                <div className='search-container'>
                    <img className = 'search-icon' src = {icon} height = {20} alt = 'search icon'/>
                    <p className = 'search-section-title'>{`${tab}:`}</p>
                    <input 
                        className = 'searchBar' 
                        type = 'text' placeholder = 'Search an Article' 
                        onChange = {handleSearch} 
                        value = {searchValue} 
                    />        
                </div> 
            </div>
                { results !== undefined && searchValue.length !== 0 ? 
                    results.map(item => <p className = 'search-result'><Link onClick = {() => props.PassThroughDetails(tab, item[1] )} to ={`/Article/${item[0]}`}>{item[0]}</Link></p>) : null 
                    }
        </div> 
    )
}

export default SearchBar