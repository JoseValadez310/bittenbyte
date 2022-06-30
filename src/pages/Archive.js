import SearchBar from "../components/SearchBar";
import "../styles/archive-page.css"

const Archive = (props) => {

  
    let tab = props.currentTab
    
    return(
       
        <main>
            <SearchBar title = {tab}/>
            <div className = "archive-article-display">
                </div>
        </main>

    )

}

export default Archive