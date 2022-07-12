


const About = () => {

    let placeHolder = 'nada'

    return (
        <main>  

            <div className = "about-me-container">
                <img src = {placeHolder} alt = "a self pic" />
                <p className = "about-me"> 

                </p>
            </div>

            <div className = "mission-statement-container">
                <div className = "mission-title">

                    </div>
                <p  className = "mission-statement">

                    </p>
            </div>

            
            <div className = "tab-info-container ">
                <div className = "tab-info-card">
                        <img src = {placeHolder} alt = "technology hero" />

                    </div>

                <div className = "tab-info-card">
                        <img src = {placeHolder} alt = "technology hero" />
                            
                    </div>

                <div className = "tab-info-card">
                        <img src = {placeHolder} alt = "technology hero" />
                    
                    </div>
            </div>

        </main>
    )
}

export default About