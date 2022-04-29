import {useState} from 'react'
const Nav = () => {

 
    const [navList,setNavList] = useState(true) 
    
    const changeNav = () => {
        if(window.scrollY >= 101) {
    
            setNavList(false);
        } else {

            setNavList(true);
        }
    }
    

    window.addEventListener('scroll', changeNav)

    return(
        <nav className = 'navBar'>
            {navList? <div className = 'logo'> Bitten Byte </div>  
                :
                <> 
                    <div className = 'logo'> Bitten Byte </div>  
                        <ul className = 'navList'>
                            <li>
                                Technology
                                </li>
                            <li>
                                Set-Ups
                                </li>
                            <li>
                                Hobbies
                                </li>
                            <li>
                                Food
                                </li>
                            <li>
                                Archive
                                </li>
                            <li>
                                About
                                </li>
                        </ul>  
                </>
            }
        </nav>    
    )
}

export default Nav