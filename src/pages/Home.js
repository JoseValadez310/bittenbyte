import data from '../content/data'
import icon from '../content/images/card-images/icon-links/icons'
import "../styles/home-page.css"
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import instagram from '../content/images/card-images/icon-links/iconmonstr-instagram-1.svg'
import twitter from '../content/images/card-images/icon-links/iconmonstr-twitter-3.svg'
import email from '../content/images/card-images/icon-links/iconmonstr-email-13.svg'
import linkedin from '../content/images/card-images/icon-links/iconmonstr-linkedin-3.svg'

const Home = (props) => {

// converting props.darkMode to something a little shorter

let darkMode = props.darkMode

// getting the length of article array 
const technology = data['technology'] //object containing an array of articles 
const techLength = technology.length //length of the array aka number of articles

const setUp = data['setUp']
const setUpLength = setUp.length

const hobby = data['hobby']
const hobbyLength = hobby.length

const food = data['food']
const foodLength = food.length

    // useState being used for Community slider (set up) section
    const [looper, setLooper] = useState(() => (0)) 
        function handleLooperAdd() {
            looper === setUpLength-1? setLooper(0) : setLooper(prevState => prevState + 1) 
        }
        function handleLooperSubtract() {
            looper === 0? setLooper(setUpLength - 1) : setLooper(prevState => prevState - 1) 
        }

    const [ranInt, setRanInt] = useState({
        'technologyOne': 0,
        'technologyTwo': 0,
        
        'hobbyOne': 0, 
        'hobbyTwo': 0,

        'foodOne': 0,
        'foodTwo': 0
    })

    useEffect( 
        function randomPanelNums() {
            let techOne = Math.floor(Math.random()* techLength)
            let techTwo = Math.floor(Math.random()* techLength)
                if(techOne === techTwo){
                    techTwo === 0? techTwo++ : techTwo-- 
                }

                let hobbyOne = Math.floor(Math.random()* hobbyLength)
                let hobbyTwo = Math.floor(Math.random()* hobbyLength)
                    if(hobbyOne === hobbyTwo){
                        hobbyOne === 0? hobbyTwo++ : hobbyTwo-- 
                    }
            
                    let foodOne = Math.floor(Math.random()* foodLength)
                    let foodTwo = Math.floor(Math.random()* foodLength)
                        if(foodOne === foodTwo){
                            foodTwo === 0? foodTwo++ : foodTwo-- 
                        }
            
            setRanInt(prevState => ({
                ...prevState,
                'technologyOne': techOne,
                'technologyTwo': techTwo,
                'hobbyOne': hobbyOne, 
                'hobbyTwo': hobbyTwo,
                'foodOne': foodOne,
                'foodTwo': foodTwo
            }))
        },[])

return(
    <main id = {darkMode === false? 'main-light':'main-dark'}>
        <div className = 'news-section'>
           
            <h1 className = 'section-title' id = {darkMode === false? 'section-title-light':'section-title-dark'}>Discovery</h1>  
               
               {/* Light Switch  */}
                <div className = 'switch-container'  onClick = {props.handleDarkMode}> 
                    <img src = {darkMode? icon.lightMode : icon.darkMode} alt = 'Website Dark/Light Switch' /> 
                </div>
                    {/* technology discovery panel */}
                    
                    <div className = 'latest-panel-one'>
                        <div className = 'panel-card-odd' id = {darkMode === false ? 'panel-card-light' : 'panel-card-dark-odd'}>
                            <small className = 'panel-author'> <i>
                                {technology[ranInt.technologyOne].author}
                                    </i> 
                                        </small>
                            <h3 className = 'panel-title'> <Link onClick = { () => props.PassThroughDetails('technology', technology[ranInt.technologyOne].id)} to = {`/Article/${technology[ranInt.technologyOne].title}`}>
                                {technology[ranInt.technologyOne].title}
                                    </Link>
                                        </h3>
                            <span className = 'panel-date-section'><small> 
                                {technology[ranInt.technologyOne].date} </small> - <small> {technology[ranInt.technologyOne].section} </small></span>
                        </div>
                    <hr/>
                        <div className = 'panel-card' id = {darkMode === false ? null : 'panel-card-dark'}>
                            <small className = 'panel-author'> <i>
                                {technology[ranInt.technologyTwo].author}
                                    </i> 
                                        </small>
                            <h3 className = 'panel-title'> <Link onClick = { () => props.PassThroughDetails('technology', technology[ranInt.technologyTwo].id)} to = {`/Article/${technology[ranInt.technologyTwo].title}`}>
                                {technology[ranInt.technologyTwo].title}
                                    </Link>
                                        </h3>
                            <span className = 'panel-date-section'><small>
                                 {technology[ranInt.technologyTwo].date} </small> - <small> {technology[ranInt.technologyTwo].section} </small></span>
                        </div>
                    </div>
                   
                    {/*  hobby discovery panel  */}
                    <div className = 'latest-panel-two'>
                        <div className = 'panel-card'  id = {darkMode === false ? null : 'panel-card-dark'}>
                            <small className = 'panel-author'> <i> 
                                {hobby[ranInt.hobbyOne].author} 
                                    </i> 
                                        </small>
                            <h3 className = 'panel-title'> <Link onClick = { () => props.PassThroughDetails('hobby', hobby[ranInt.hobbyOne].id)} to = {`/Article/${hobby[ranInt.hobbyOne].title}`}>
                                {hobby[ranInt.hobbyOne].title}
                                    </Link>
                                        </h3>
                            <span className = 'panel-date-section'><small> {hobby[ranInt.hobbyOne].date} </small> - <small> {hobby[ranInt.hobbyOne].section} </small></span>
                        </div> 
                    <br/>
                        <div className = 'panel-card-odd' id = {darkMode === false ? 'panel-card-light' : 'panel-card-dark-odd'}>
                            <small className = 'panel-author'> <i> 
                                {hobby[ranInt.hobbyTwo].author} 
                                    </i> 
                                        </small>
                            <h3 className = 'panel-title'> <Link onClick = { () => props.PassThroughDetails('hobby', hobby[ranInt.hobbyTwo].id)} to = {`/Article/${hobby[ranInt.hobbyTwo].title}`}>
                                {hobby[ranInt.hobbyTwo].title}
                                    </Link>
                                        </h3>
                            <span className = 'panel-date-section'><small> {hobby[ranInt.hobbyTwo].date} </small> - <small> {hobby[ranInt.hobbyTwo].section} </small></span>
                        </div> 
                    </div>
                    
                    {/* food discovery panel*/}
                    <div className = 'latest-panel-three'>
                        <div className = 'panel-card-odd' id = {darkMode === false ? 'panel-card-light' : 'panel-card-dark-odd'}>                            
                            <small className = 'panel-author'> <i> 
                                {food[ranInt.foodOne].author}
                                    </i> 
                                        </small>
                                <h3 className = 'panel-title'> <Link onClick = { () => props.PassThroughDetails('food', food[ranInt.foodOne].id)} to = {`/Article/${food[ranInt.foodOne].title}`}>
                                    {food[ranInt.foodOne].title}
                                        </Link>
                                            </h3>
                            <span className = 'panel-date-section'><small> {food[ranInt.foodOne].date} </small> - <small> {food[ranInt.foodOne].section} </small></span>
                        </div>
                    <hr/>
                        <div className = 'panel-card'  id = {darkMode === false ? null : 'panel-card-dark'}> 
                            <small className = 'panel-author'> <i>
                                {food[ranInt.foodTwo].author}
                                </i> 
                                    </small>
                            <h3 className = 'panel-title'> <Link onClick = { () => props.PassThroughDetails('food', food[ranInt.foodTwo].id)} to = {`/Article/${food[ranInt.foodTwo].title}`}>
                                {food[ranInt.foodTwo].title}
                                    </Link>
                                        </h3>
                            <span className = 'panel-date-section'><small>{food[ranInt.foodTwo].date} </small> - <small> {food[ranInt.foodTwo].section}</small></span>
                        
                        </div>
                        
                    </div>


                {/* <div className = 'news-banner'>
                    <div className = 'card-article' id = {darkMode === false ? 'card-light' : 'card-dark'}>
                        <div className = 'news-banner-content'>
                            {/* <p>
                                {data['news-hero'][0].new}
                            </p> 
                        </div>
                    </div>
                </div> 
                
                <div className = 'editor-choice'>
                    <div className = 'card-article' id = {darkMode === false ? 'card-light' : 'card-dark'}>
                        <div className = 'editor-choice-content'>
                            <p>
                                 Welcome to Bitten Bite. Our mission will follow that of creating meanful tales. To undertsand Bitten Bite is to know its a show ran by a single person with a ring to rule them all. Hello dear reader, I hope you find something you'll enjoy. I'm also wondering if i can run a site without wifi. Local site. 
                            </p>
                        </div>
                    </div>
                </div> */}
        </div>
       
        <div className = 'technology-section' >
            <h1 className = 'section-title' id = {darkMode === false? 'section-title-light':'section-title-dark'}>Technology</h1> 
                <div className = 'tech-card-one' >
                    <Link className = 'card-article' id = {darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.PassThroughDetails('technology',technology[techLength-1].id)} to = {`/Article/${technology[techLength-1].title}`}>       
                        <small className = 'card-date' id = {darkMode === false? 'date-light' : 'date-dark'}> {technology[techLength-1].date} </small>
                            <img className = 'card-image' src = {technology[techLength-1].image} loading="lazy" alt = 'something' />
                            <div className = 'card-description'>
                                <h1 className = 'card-title'>
                                    {technology[techLength-1].title}
                                    </h1>
                                <h4 className = 'card-author'><i>
                                    {technology[techLength-1].author}
                                    </i></h4>
                                <p className = 'card-summary'>
                                    {technology[techLength-1].summary}
                                </p>
                            </div>
                    </Link>
                </div>

                <div className = 'tech-card-two'>
                    <Link className = 'card-article' id = {darkMode === false ? 'card-light' : 'card-dark'}  onClick= { () => props.PassThroughDetails('technology', technology[techLength-2].id)} to = {`/Article/${technology[techLength-2].title}`}>       
                        <small className = 'card-date'  id = {darkMode === false? 'date-light' : 'date-dark'}> {technology[techLength-2].date} </small>
                        <img className = 'card-image' src = {technology[techLength-2].image} loading="lazy" alt = 'Coming Soon near you' />
                            <div className = 'card-description'>
                                <h1 className = 'card-title'>
                                    {technology[techLength-2].title}
                                    </h1>
                                <h4 className = 'card-author'><i>
                                    {technology[techLength-2].author} 
                                    </i></h4>
                                <p className = 'card-summary'>
                                    {technology[techLength-2].summary}
                                </p>
                            </div>      
                    </Link>
                </div>

                <div className = 'tech-card-three'>
                    <Link className = 'card-article' id = {darkMode === false ? 'card-light' : 'card-dark'}  onClick= { () => props.PassThroughDetails('technology',technology[techLength-3].id)} to = {`/Article/${technology[techLength-3].title}`}>       
                        <small className = 'card-date'  id = {darkMode === false? 'date-light' : 'date-dark'}> {technology[techLength-3].date} </small>
                            <img className = 'card-image' src = {technology[techLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                            <div className = 'card-description'>
                                <h1 className = 'card-title'>
                                    {technology[techLength-3].title}
                                    </h1>
                                <h4 className = 'card-author'><i>
                                    {technology[techLength-3].author}
                                    </i></h4>
                                <p className = 'card-summary'>
                                    {technology[techLength-3].summary}
                                </p>
                            </div>
                    </Link>
                </div>
            </div>
        
        <div className = 'set-up-section'>
            <h1 className = 'section-title' id = {darkMode === false? 'section-title-light':'section-title-dark'}>Community Set-Ups</h1>
                <div className = 'set-slide-one'>
                    <img className = 'setUp-slider' src = {looper === setUpLength-1? setUp[setUpLength-1].image : setUp[looper].image} alt = 'post from the community'/>
                </div> 
                <div className = 'arrowLeft-box'>
                    <img src = {icon.arrow} onClick = {handleLooperSubtract} className = "arrowLeft" alt = 'left arrow clicker'/> 
                </div>
                
                <div className = 'set-slide-two'>
                    <img className = 'setUp-slider' src = {looper === setUpLength-1? setUp[0].image : setUp[looper+1].image } alt = 'post from the community'/>
                </div>
                <div className = 'arrowRight-box'>
                    <img src = {icon.arrow} onClick = {handleLooperAdd} className = "arrowRight" alt = 'right arrow clicker'/>
                </div>
            </div>
        
        <div className = 'hobby-section'>
            <h1 className = 'section-title' id = {darkMode === false? 'section-title-light':'section-title-dark'} >Hobbies</h1>

                <div className = 'hobby-card-one'>
                    <Link className = 'card-article' id = {darkMode === false ? 'card-light' : 'card-dark'}  onClick= { () => props.PassThroughDetails('hobby', hobby[hobbyLength-1].id)} to = {`/Article/${hobby[hobbyLength-1].title}`}>    
                        <small className = 'card-date' id = {darkMode === false? 'date-light' : 'date-dark'}> {hobby[hobbyLength-1].date} </small>
                            <img className = 'card-image' src = {hobby[hobbyLength-1].image} loading="lazy" alt = 'Coming Soon near you' />    
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {hobby[hobbyLength-1].title}
                                </h1>
                            <h4 className = 'card-author'><i>
                                {hobby[hobbyLength-1].author}
                                </i></h4>
                            <p className = 'card-summary'>
                                {hobby[hobbyLength-1].summary}
                            </p>
                        </div>
                    </Link>
                </div>

                <div className = 'hobby-card-two'>
                    <Link className = 'card-article' id = {darkMode === false ? 'card-light' : 'card-dark'}  onClick= { () => props.PassThroughDetails('hobby', hobby[hobbyLength-2].id)} to = {`/Article/${hobby[hobbyLength-2].title}`}>       
                        <small className = 'card-date' id = {darkMode === false? 'date-light' : 'date-dark'}> {hobby[hobbyLength-2].date} </small>
                            <img className = 'card-image' src = {hobby[hobbyLength-2].image} loading="lazy" alt = 'Coming Soon near you' />
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {hobby[hobbyLength-2].title}
                                </h1>
                            <h4 className = 'card-author'><i>
                                {hobby[hobbyLength-2].author}
                                </i></h4>
                            <p className = 'card-summary'>
                                {hobby[hobbyLength-2].summary}
                            </p>
                        </div>       
                    </Link>
                </div>

                <div className = 'hobby-card-three'>
                    <Link className = 'card-article' id = {darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.PassThroughDetails('hobby', hobby[hobbyLength-3].id)} to = {`/Article/${hobby[hobbyLength-3].title}`}>     
                        <small className = 'card-date' id = {darkMode === false? 'date-light' : 'date-dark'}> {hobby[hobbyLength-3].date} </small>
                            <img className = 'card-image' src = {hobby[hobbyLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {hobby[hobbyLength-3].title}
                                </h1>
                            <h4 className = 'card-author'><i>
                                {hobby[hobbyLength-3].author}
                                </i></h4>
                            <p className = 'card-summary'>
                                {hobby[hobbyLength-3].summary}
                            </p>
                        </div>  
                    </Link>
                </div>
            </div>
        
        <div className = 'food-section'>
            <h1 className = 'section-title' id = {darkMode === false? 'section-title-light':'section-title-dark'}>Food</h1>           
                
                <div className = 'food-card-one'>
                    <Link className = 'side-card-article' id = {darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.PassThroughDetails('food', food[foodLength-1].id)} to = {`/Article/${food[foodLength-1].title}`}>       
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {food[foodLength-1].title}
                                </h1>
                            <h4 className = 'card-author'><i>
                                {food[foodLength-1].author}
                                </i> </h4>
                            <p className = 'card-summary'>
                                {food[foodLength-1].summary}
                                </p>
                        </div>
                        
                        <div className = 'image-container'>
                            <small className = 'card-date' id = {darkMode === false? 'date-light' : 'date-dark'}> {food[foodLength-1].date} </small>
                            <img className = 'card-image' src = {food[foodLength-1].image} loading="lazy" alt = 'Coming Soon near you' />
                        </div>
                        
                    </Link>
                </div>

                <div className = 'food-card-two'>
                    <Link className = 'side-card-article' id = {darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.PassThroughDetails('food', food[foodLength-2].id)} to = {`/Article/${food[foodLength-2].title}`}> 
                        <div className = 'image-container'>
                        <small className = 'card-date' id = {darkMode === false? 'date-light' : 'date-dark'}> {food[foodLength-2].date} </small>
                            <img className = 'card-image' src = {food[foodLength-2].image} loading="lazy" alt = 'Coming Soon near you' />
                        </div>

                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {food[foodLength-2].title}
                                </h1>
                            <h4 className = 'card-author'><i>
                                {food[foodLength-2].author}
                                </i></h4>
                            <p className = 'card-summary'>
                                {food[foodLength-2].summary}
                            </p>
                        </div>
                    </Link>
                </div>

                <div className = 'food-card-three'>
                    <Link className = 'side-card-article' id = {darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.PassThroughDetails('food', food[foodLength-3].id)} to = {`/Article/${food[foodLength-3].title}`}>     
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {food[foodLength-3].title}
                                </h1>
                            <h4 className = 'card-author'><i>
                                {food[foodLength-3].author}
                                </i></h4>
                            <p className = 'card-summary'>
                                {food[foodLength-3].summary}
                            </p>
                        </div>
                        
                        <div className = 'image-container'>
                        <small className = 'card-date' id = {darkMode === false? 'date-light' : 'date-dark'}> {food[foodLength-3].date} </small>
                            <img className = 'card-image' src = {food[foodLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home