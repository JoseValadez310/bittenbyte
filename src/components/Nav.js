import "../styles/nav-component.css"
//import {useState} from 'react'
import { NavLink } from 'react-router-dom'



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
                    <NavLink className = 'nav-link' to = '/Food'>
                        Food 
                            </NavLink>
                    <NavLink className = 'nav-link' to = '/Comunity'> 
                        Set-Ups 
                            </NavLink>  
                    <NavLink className = 'nav-link' to = '/Hobby'> 
                        Hobbies 
                            </NavLink>
                
                <NavLink to ='/' className = 'logo'> Bitten Bite </NavLink>      
                    
                    <NavLink className = 'nav-link' to = '/Technology'>
                        Technology
                            </NavLink>
                    <NavLink className = 'nav-link' to = '/Archive'>
                        Archive
                            </NavLink>
                    <NavLink className = 'nav-link' to = '/About'>
                        About
                            </NavLink>
            </div>
        </nav>    
    )
}

export default Nav