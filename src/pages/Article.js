import "../styles/article-page.css"
import data from '../content/data'
import icon from "../content/images/card-images/icon-links/icons"


const Article = (props) => {

    console.log(props)
    
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
                <img src = {icon.twitter} alt = 'Sharing link to twitter' />
                <img src = {icon.email} alt = 'Sharing link through email' />
                <img src = {icon.linkedin} alt = 'Sharing link linkedin' />
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

