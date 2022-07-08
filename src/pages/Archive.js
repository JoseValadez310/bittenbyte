import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from "../components/SearchBar";
import data from "../content/data";
import "../styles/archive-page.css"

const Archive = (props) => {

    console.log(props)
    let darkMode = props.darkMode
    let tab = props.currentTab.toLowerCase()

    const [articleDisplay, setArticleDisplay] = useState()
    
        useEffect(()=>{
            let arrayPlaceholder = []
                for(let i = data[tab].length-1; i !== -1; i--){
                        if( i === data[tab].length-1 ){
                            arrayPlaceholder.push(
                                <div className = 'archive-card-main' id = {darkMode? "card-dark" : "card-light"}  >
                                    <Link  onClick = { () => props.PassThroughDetails(tab, data[tab][i].id)} to = {`/Article/${data[tab][i].title}`}>
                                        <div className = 'archive-card-image-container'>
                                            <img className = 'archive-card-image' src = {data[tab][i].image} alt = 'archive article' />
                                        </div>
                                            <br/>
                                        <div>
                                            <h3 className = 'archive-card-title' > {data[tab][i].title} </h3>
                                                <br/>
                                            <small className = 'archive-card-author'> {data[tab][i].author} - {data[tab][i].date}</small>
                                                <br/>
                                            <p className = 'archive-card-summary' id = {props.darkMode? 'article-content-dark' : ' '} > {data[tab][i].summary} </p>
                                        </div>
                                    </Link>
                                </div>
                            ) 
                        } else { 
                            arrayPlaceholder.push(
                                <div className = 'archive-card' id = {darkMode? "card-dark" : "card-light"} >
                                    <Link  onClick = { () => props.PassThroughDetails(tab, data[tab][i].id)} to = {`/Article/${data[tab][i].title}`}>
                                        <img className = 'archive-card-image' src = {data[tab][i].image} alt = 'archive article' />
                                            <br/>
                                        <div className = 'archive-card-content-wrapper'>
                                            <h3 className = 'archive-card-title'> {data[tab][i].title} </h3>
                                                <br/>
                                            <small className = 'archive-card-author'> {data[tab][i].author} - {data[tab][i].date}</small>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    }
                setArticleDisplay(arrayPlaceholder)
            },[tab])

    // setArticleDisplay(data[tab].map( item => 
    //         <div className = 'archive-card'>
    //             <img className = 'archive-card-image' src = {item.image} alt = 'archive article' />
    //                 <br/>
    //             <small className = 'archive-card-author'> {item.author} </small>
    //                 <br/>
    //             <h3 className = 'archive-card-title'> {item.title} </h3>
    //         </div>
    //         )
    //     )
    
    
    
    
    return(
       
        <main id = {darkMode === false? 'main-light':'main-dark'}>
            <SearchBar tab = {tab} PassThroughDetails = {props.PassThroughDetails}/>
            <div className = "archive-article-display">
                {articleDisplay}
                </div>
        </main>

    )

}

export default Archive