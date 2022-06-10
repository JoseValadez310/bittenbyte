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
                <NavLink to ='/' className = 'logo'> Bitten Bite </NavLink>  
                <div className = 'nav-links'> 
                            <NavLink className = 'navLink' to = '/Technology'>
                                Technology
                                    </NavLink>
                            <NavLink className = 'navLink' to = '/Comunity'> 
                                Set-Ups 
                                    </NavLink>  
                            <NavLink className = 'navLink' to = '/Hobby'> 
                                Hobbies 
                                    </NavLink>
                            <NavLink className = 'navLink' to = '/Food'>
                                Food 
                                    </NavLink>
                            <NavLink className = 'navLink' to = '/Archive'>
                                Archive
                                    </NavLink>
                            <NavLink className = 'navLink' to = '/About'>
                                About
                                    </NavLink>
            </div>
        </nav>    
    )
}

export default Nav