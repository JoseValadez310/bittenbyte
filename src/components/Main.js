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
            <div className = 'news-hero'>
                <div className = 'news-banner'>
                    <h1>
                        {dataSet['news-hero'][0].new}
                    </h1>
                </div>

                <div className = 'editor-choice'>
                    <h1>
                        Welcome to Bitten Byte
                    </h1>
                </div>

                <div className = 'latest'>
                    <h1>
                        Welcome to Bitten Byte
                    </h1>
                </div>
            </div>
            


            <h1 className = 'section-title'>Technology</h1>
                <div className = 'technology-section' >
                    
                    <div className = 'tec-card-one'>
                        <div className = 'card-article'>
                            <small className = 'card-date'> {techArticle[techLength-1].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-1].image} alt = ' Soon hear you' />
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
                            <img className = 'card-image' src = {techArticle[techLength-1].image} alt = 'Coming Soon hear you' />
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

                    <div className = 'tec-card-three'>
                        <div className = 'card-article'>    
                            <small className = 'card-date'> {techArticle[techLength-3].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-1].image} alt = 'Coming Soon hear you' />
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

                    <div className = 'tec-slide'>
                        <h1>
                        Tech slide 
                        </h1>
                    </div>
                </div>
        



            <h1 className = 'section-title'>Set-Ups</h1>
                <div className = 'set-up-section'>
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

            <h1 className = 'section-title' >Hobbies</h1>
                <div className = 'hobby-section'>
                    <div className = 'hobby-card-one'>
                        <div className = 'card-article'>                        
                            <small className = 'card-date'> {techArticle[techLength-1].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-1].image} alt = 'Coming Soon hear you' />    
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

                    <div className = 'hobby-card-two'>
                        <div className = 'card-article'>        
                            <small className = 'card-date'> {techArticle[techLength-1].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-1].image} alt = 'Coming Soon hear you' />
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

                    <div className = 'hobby-card-three'>
                        <div className = 'card-article'>
                            <small className = 'card-date'> {techArticle[techLength-1].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-1].image} alt = 'Coming Soon hear you' />
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
                </div>




            <h1 className = 'section-title'>Food</h1>
                <div className = 'food-section'>
                    
                    <div className = 'food-card-one'>
                        <div className = 'card-article'> 
                            <small className = 'card-date'> {techArticle[techLength-1].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-1].img} alt = 'Coming Soon hear you' />
                            
                            <h1 className = 'card-title'>
                                {techArticle[techLength-1].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {techArticle[techLength-1].author}
                                </h4>
                            <p className = 'summary'>
                                {techArticle[techLength-1].summary}
                            </p>
                        </div>
                    </div>

                    <div className = 'food-card-two'>
                        <div className = 'card-article'>   
                            <small className = 'card-date'> {techArticle[techLength-1].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-1].img} alt = 'Coming Soon hear you' />
                            
                            <h1 className = 'card-title'>
                                {techArticle[techLength-1].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {techArticle[techLength-1].author}
                                </h4>
                            <p className = 'summary'>
                                {techArticle[techLength-1].summary}
                            </p>        
                        </div>
                    </div>

                    <div className = 'food-card-three'>
                        <div className = 'card-article'>
                            <small className = 'card-date'> {techArticle[techLength-1].date} </small>
                            <img className = 'card-image' src = {techArticle[techLength-1].img} alt = 'Coming Soon hear you' />
                            
                            <h1 className = 'card-title'>
                                {techArticle[techLength-1].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {techArticle[techLength-1].author}
                                </h4>
                            <p className = 'summary'>
                                {techArticle[techLength-1].summary}
                            </p>  
                        </div>
                    </div>
                </div>
        </main>
    )
}

export default Main