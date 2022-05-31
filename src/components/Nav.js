import "../styles/nav-component.css"
//import {useState} from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {

 
    // const [navList,setNavList] = useState(true) 
    
    // const changeNav = () => {
    //     if(window.scrollY >= 101) {
    
    //         setNavList(false);
    //     } else {

    //         setNavList(true);
    //     }
    // }
    

    // window.addEventListener('scroll', changeNav)

    return(
        <nav className = 'navBar'>
                <div className = 'centered-nav'> 
                    <Link className = 'nav-link' to = '/Article'>
                        Food 
                            </Link>
                    <Link className = 'nav-link' to = '/Comunity'> 
                        Set-Ups 
                            </Link>  
                    <Link className = 'nav-link' to = '/Hobby'> 
                        Hobbies 
                            </Link>
                
                <Link to ='/' className = 'logo'> Bitten Bite </Link>      
                    
                    <Link className = 'nav-link' to = '/Technology'>
                        Technology
                            </Link>
                    <Link className = 'nav-link' to = '/Archive'>
                        Archive
                            </Link>
                    <Link className = 'nav-link' to = '/About'>
                        About
                            </Link>
            </div>
        </nav>    
    )
}

export default Nav