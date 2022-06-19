import SearchBar from "../components/SearchBar";


const Archive = (props) => {

    return(

        <main>
            <SearchBar />

            <h1> {props.article.sectionTitle} </h1>
        </main>

    )

}

export default Archive