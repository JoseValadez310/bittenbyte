import "../styles/article-page.css"
import data from '../content/data'
import instagram from '../content/images/card-images/icon-links/iconmonstr-instagram-1.svg'
import twitter from '../content/images/card-images/icon-links/iconmonstr-twitter-3.svg'
import email from '../content/images/card-images/icon-links/iconmonstr-email-13.svg'
import linkedin from '../content/images/card-images/icon-links/iconmonstr-linkedin-3.svg'
import { useState,useEffect } from 'react' 


const Article = (props) => {
    console.log(props)

    let article = data[props.article.sectionTitle][props.article.sectionId]

    const [articleIndent, setArticleIndent] = useState ()

  
    useEffect(()=>{
        let indentHolder = []

        for(let i = 0; i < article.story.length; i++ ){
            indentHolder.push(<p className = 'indent'> {article.story[i]} </p>)
        }

        setArticleIndent(indentHolder)

    },[article])
  
console.log(articleIndent)
    return (
        <main id = {props.darkMode? 'main-dark' : ' '}>
            <div className = 'article-details' id = {props.darkMode? 'article-details-dark' : ' '}>
                <h1 className = 'article-title'>
                    {article.title}
                    </h1>
                <h4 className = 'article-author'> 
                    {article.author}
                    </h4>
                <small className = 'article-date'>  
                    {article.date}
                    </small>
            </div>
            
            <div className = 'article-share-icon'>
                <img className = 'svg-icon' src = {instagram} alt = 'Sharing link instagram' />
                <img className = 'svg-icon' src = {twitter} alt = 'Sharing link to twitter' />
                <img className = 'svg-icon' src = {linkedin} alt = 'Sharing link linkedin' />
                <img className = 'svg-icon' src = {email} alt = 'Sharing link through email' />
            </div>
                
            <div className = 'article-image-wrapper'>
                <img src = {article.image} alt = 'blog post place holder'/>
            </div> 

            <div className = 'article-image-credit'  id = {props.darkMode? 'article-image-credit-dark' : ' '}>
                    <small>Photo by JRR Token</small> 
            </div>

            <div className = 'article-content'  id = {props.darkMode? 'article-content-dark' : ' '}>
                {articleIndent}
            </div>
        </main>
    )
}

export default Article

