import "../styles/article-page.css"
import icon from "../content/images/card-images/icon-links/icons"
import image from "../content/images"

const Article = () => {

    return (
        <main>
            <div className = 'article-details'>
                <h1 className = 'article-title'>
                    The Wonders of San Francisco
                    </h1>
                <h4 className = 'article-author'> 
                    Authour of Article 
                    </h4>
                <small className = 'article-date'>  
                    Date of Article 
                    </small>
            </div>
            
            <div className = 'article-share-icon'>
                <img src = {icon.twitter} alt = 'Sharing link to twitter' />
                <img src = {icon.email} alt = 'Sharing link through email' />
                <img src = {icon.linkedin} alt = 'Sharing link linkedin' />
            </div>
                
            <div className = 'article-image-wrapper'>
                <img src = {image.tech.tech2} alt = 'blog post place holder'/>
            </div> 

            <div className = 'article-image-credit'>
                    <small>Photo by JRR Token</small> 
            </div>
        </main>
    )
}

export default Article

