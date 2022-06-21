import SearchBar from "../components/SearchBar";
import "../styles/archive-page.css"

const Archive = (props) => {


    return(
       
        <main>
            <SearchBar title = {props.article.sectionTitle}/>
            <div className = "archive-article-display">
                </div>
        </main>

    )

}

export default Archive