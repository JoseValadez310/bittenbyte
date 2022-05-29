import dataSet from '../content/data'
import icon from '../content/images/icon-links/icons'
import { useState } from 'react'

const Main = (props) => {

const techArticle = dataSet['technology-section']
const techLength = techArticle.length

const setUpArticle = dataSet['set-up-section']
const setUpLength = setUpArticle.length

const hobbyArticle = dataSet['hobby-section']
const hobbyLength = hobbyArticle.length

const foodArticle = dataSet['food-section']
const foodLength = foodArticle.length

const [looper, setLooper] = useState(() => (0)) 

function handleLooperAdd() {
    looper === setUpLength-1? setLooper(0) : setLooper(prevState => prevState + 1) 
}

function handleLooperSubtract() {
    looper === 0? setLooper(setUpLength - 1) : setLooper(prevState => prevState - 1) 
}

return(
    <main id = {props.darkMode === false? 'main-light':'main-dark'}>
        <div className = 'news-section'>
           
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'}>Latest</h1>  
               
                <div className = 'switch-container'>  
                    <img className = 'lightModeSwitch' src = {icon.lightMode} alt = 'PNG of the Sun' />
                        <div className = 'switch-box' >
                            <label className = 'switch'>
                                <input type="checkbox" onClick = {props.handleDarkMode}/>
                                <span className = 'slider round'></span>
                            </label>
                        </div>
                    <img className = 'darkModeSwitch' src = {icon.darkMode} alt = 'PNG of the Moon' /> 
                </div>

                <div className = 'news-banner'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>
                        <div className = 'news-banner-content'>
                            {/* <p>
                                {dataSet['news-hero'][0].new}
                            </p> */}
                        </div>
                    </div>
                </div>

                <div className = 'editor-choice'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>
                        <div className = 'editor-choice-content'>
                            <p>
                                {/* Welcome to Bitten Bite. Our mission will follow that of creating meanful tales. To undertsand Bitten Bite is to know its a show ran by a single person with a ring to rule them all. Hello dear reader, I hope you find something you'll enjoy. I'm also wondering if i can run a site without wifi. Local site. */}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
            
       
       
        <div className = 'technology-section' >
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'}>Technology</h1>     
                <div className = 'tec-card-one'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>       
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {techArticle[techLength-1].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-1].image} loading="lazy" alt = 'something' />
                            <div className = 'card-description'>
                                <h1 className = 'card-title'>
                                    {techArticle[techLength-1].title}
                                    </h1>
                                <h4 className = 'card-author'>
                                    {techArticle[techLength-1].author}
                                    </h4>
                                <p className = 'card-summary'>
                                    {techArticle[techLength-1].summary}
                                </p>
                            </div>
                    </div>
                </div>



                <div className = 'tec-card-two'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>       
                        <small className = 'card-date'  id = {props.darkMode === false? 'date-light' : 'date-dark'}> {techArticle[techLength-2].date} </small>
                        <img className = 'card-image' src = {techArticle[techLength-2].image} loading="lazy" alt = 'Coming Soon near you' />
                            <div className = 'card-description'>
                                <h1 className = 'card-title'>
                                    {techArticle[techLength-2].title}
                                    </h1>
                                <h4 className = 'card-author'>
                                    {techArticle[techLength-2].author}
                                    </h4>
                                <p className = 'card-summary'>
                                    {techArticle[techLength-2].summary}
                                </p>
                            </div>      
                    </div>
                </div>

                <div className = 'tec-card-three'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>       
                        <small className = 'card-date'  id = {props.darkMode === false? 'date-light' : 'date-dark'}> {techArticle[techLength-3].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                            <div className = 'card-description'>
                                <h1 className = 'card-title'>
                                    {techArticle[techLength-3].title}
                                    </h1>
                                <h4 className = 'card-author'>
                                    {techArticle[techLength-3].author}
                                    </h4>
                                <p className = 'card-summary'>
                                    {techArticle[techLength-3].summary}
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        
        <div className = 'set-up-section'>
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'}>Community Set-Ups</h1>
                <div className = 'set-slide-one'>
                    <img className = 'setUp-slider' src = {looper === setUpLength-1? setUpArticle[setUpLength-1].image : setUpArticle[looper].image} alt = 'post from the community'/>
                        </div>
                <img src = {icon.arrow} onClick = {handleLooperSubtract} className = "arrowLeft" alt = 'left arrow clicker'/> 
                
                <div className = 'set-slide-two'>
                    <img className = 'setUp-slider' src = {looper === setUpLength-1? setUpArticle[0].image : setUpArticle[looper+1].image } alt = 'post from the community'/>
                        </div>
                <img src = {icon.arrow} onClick = {handleLooperAdd} className = "arrowRight" alt = 'right arrow clicker'/>
        </div>
        
        <div className = 'hobby-section'>
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'} >Hobbies</h1>
                <div className = 'hobby-card-one'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>       
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {hobbyArticle[hobbyLength-1].date} </small>
                            <img className = 'card-image' src = {hobbyArticle[hobbyLength-1].image} loading="lazy" alt = 'Coming Soon near you' />    
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {hobbyArticle[hobbyLength-1].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {hobbyArticle[hobbyLength-1].author}
                                </h4>
                            <p className = 'card-summary'>
                                {hobbyArticle[hobbyLength-1].summary}
                            </p>
                        </div>
                    </div>
                </div>

                <div className = 'hobby-card-two'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>       
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {hobbyArticle[hobbyLength-2].date} </small>
                            <img className = 'card-image' src = {hobbyArticle[hobbyLength-2].image} loading="lazy" alt = 'Coming Soon near you' />
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {hobbyArticle[hobbyLength-2].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {hobbyArticle[hobbyLength-2].author}
                                </h4>
                            <p className = 'card-summary'>
                                {hobbyArticle[hobbyLength-2].summary}
                            </p>
                        </div>       
                    </div>
                </div>

                <div className = 'hobby-card-three'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>       
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {hobbyArticle[hobbyLength-3].date} </small>
                            <img className = 'card-image' src = {hobbyArticle[hobbyLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {hobbyArticle[hobbyLength-3].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {hobbyArticle[hobbyLength-3].author}
                                </h4>
                            <p className = 'card-summary'>
                                {hobbyArticle[hobbyLength-3].summary}
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
        
        <div className = 'food-section'>
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'}>Food</h1>           
                <div className = 'food-card-one'>
                    <div className = 'side-card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>       
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {foodArticle[foodLength-1].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {foodArticle[foodLength-1].author}
                                </h4>
                            <p className = 'card-summary'>
                                {foodArticle[foodLength-1].summary}
                                </p>
                        </div>
                        
                        <div className = 'image-container'>
                            <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {foodArticle[foodLength-1].date} </small>
                            <img className = 'card-image' src = {foodArticle[foodLength-1].image} loading="lazy" alt = 'Coming Soon near you' />
                        </div>
                        
                    </div>
                </div>

                <div className = 'food-card-two'>
                    <div className = 'side-card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}> 
                        <div className = 'image-container'>
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {foodArticle[foodLength-2].date} </small>
                            <img className = 'card-image' src = {foodArticle[foodLength-2].image} loading="lazy" alt = 'Coming Soon near you' />
                        </div>

                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {foodArticle[foodLength-2].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {foodArticle[foodLength-2].author}
                                </h4>
                            <p className = 'card-summary'>
                                {foodArticle[foodLength-2].summary}
                            </p>
                        </div>
                    </div>
                </div>

                <div className = 'food-card-three'>
                    <div className = 'side-card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>     
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {foodArticle[foodLength-3].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {foodArticle[foodLength-3].author}
                                </h4>
                            <p className = 'card-summary'>
                                {foodArticle[foodLength-3].summary}
                            </p>
                        </div>
                        
                        <div className = 'image-container'>
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {foodArticle[foodLength-3].date} </small>
                            <img className = 'card-image' src = {foodArticle[foodLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main