import "../styles/article-page.css"
import data from '../content/data'
import instagram from '../content/images/card-images/icon-links/iconmonstr-instagram-1.svg'
import twitter from '../content/images/card-images/icon-links/iconmonstr-twitter-3.svg'
import email from '../content/images/card-images/icon-links/iconmonstr-email-13.svg'
import linkedin from '../content/images/card-images/icon-links/iconmonstr-linkedin-3.svg'


const Article = (props) => {
    
    let article = data[props.article.sectionTitle][props.article.sectionId]
    
    // function indentingParagraphs() {
        
    // }

    

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
                <img src = {twitter} alt = 'Sharing link to twitter' />
                <img src = {email} alt = 'Sharing link through email' />
                <img src = {linkedin} alt = 'Sharing link linkedin' />
                <img src = {instagram} alt = 'Sharing link instagram' />
            </div>
                
            <div className = 'article-image-wrapper'>
                <img src = {article.image} alt = 'blog post place holder'/>
            </div> 

            <div className = 'article-image-credit'  id = {props.darkMode? 'article-image-credit-dark' : ' '}>
                    <small>Photo by JRR Token</small> 
            </div>

            <div className = 'article-content'  id = {props.darkMode? 'article-content-dark' : ' '}>
                {article.story}
            </div>
        </main>
    )
}

export default Article

