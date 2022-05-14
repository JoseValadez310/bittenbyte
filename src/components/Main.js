import dataSet from '../content/data'
import { useState } from 'react'

const Main = () => {

    const techArticle = dataSet['technology-section']
    const techLength = techArticle.length
   
    const setUpArticle = dataSet['set-up-section']
    const setUpLength = setUpArticle.length

    const hobbyArticle = dataSet['hobby-section']
    const hobbyLength = hobbyArticle.length

    const foodArticle = dataSet['food-section']
    const foodLength = foodArticle.length

    


    return(
        <main>

            <div className = 'news-section'>
                <h1 className = 'section-title'>Latest</h1>  
                    <div className = 'news-banner'>
                        <div className = 'news-banner-content'>
                            <p>
                                {dataSet['news-hero'][0].new}
                            </p>
                        </div>
                    </div>

                    <div className = 'editor-choice'>
                        <div className = 'editor-choice-content'>
                            <p>
                                Hello, something else will go here. 
                            </p>
                        </div>
                    </div>
            </div>
                
            <div className = 'technology-section' >
                <h1 className = 'section-title'>Technology</h1>    
                    <div className = 'tec-card-one'>
                        <div className = 'card-article'>
                            <small className = 'card-date'> {techArticle[techLength-1].date} </small>
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
                        <div className = 'card-article'>
                            <small className = 'card-date'> {techArticle[techLength-2].date} </small>
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
                        <div className = 'card-article'>    
                            <small className = 'card-date'> {techArticle[techLength-3].date} </small>
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

                    <div className = 'tec-slide'>
                        <h1>
                        Tech slide 
                        </h1>
                    </div>
                </div>
            
            <div className = 'set-up-section'>
                <h1 className = 'section-title'>Set-Ups</h1>
                    <div className = 'set-slide-one'>
                        <h1>
                        set up slide 
                        </h1>
                    </div>

                    <div className = 'set-slide-two'>
                        <h1>
                        set up slide 
                        </h1>
                    </div>

                </div>

            
            <div className = 'hobby-section'>
                <h1 className = 'section-title' >Hobbies</h1>
                    <div className = 'hobby-card-one'>
                        <div className = 'card-article'>                        
                            <small className = 'card-date'> {hobbyArticle[hobbyLength-1].date} </small>
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
                        <div className = 'card-article'>        
                            <small className = 'card-date'> {hobbyArticle[hobbyLength-2].date} </small>
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
                        <div className = 'card-article'>
                            <small className = 'card-date'> {hobbyArticle[hobbyLength-3].date} </small>
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
                <h1 className = 'section-title'>Food</h1>           
                    <div className = 'food-card-one'>
                        <div className = 'side-card-article'> 
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
                                <small className = 'card-date'> {foodArticle[foodLength-1].date} </small>
                                <img className = 'card-image' src = {foodArticle[foodLength-1].image} loading="lazy" alt = 'Coming Soon near you' />
                            </div>
                            
                        </div>
                    </div>

                    <div className = 'food-card-two'>
                        <div className = 'side-card-article'> 
                            <div className = 'image-container'>
                                <small className = 'card-date'> {foodArticle[foodLength-2].date} </small>
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
                        <div className = 'side-card-article'> 
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
                                <small className = 'card-date'> {foodArticle[foodLength-3].date} </small>
                                <img className = 'card-image' src = {foodArticle[foodLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    )
}

export default Main