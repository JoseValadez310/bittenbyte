import "../styles/nav-component.css"
//import {useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'




const Nav = (props) => {

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
                <NavLink to ='/' className = 'logo'> BITTEN BYTE </NavLink>  
                <div className = 'nav-links'> 
                            <NavLink className = 'navLink' to = '/Archive/Technology' onClick = {() => props.tabSection('Technology')}>
                                Technology
                                    </NavLink>
                            <NavLink className = 'navLink' to = '/Archive/Hobby' onClick = {() => props.tabSection('Hobby')}>
                                Hobbies 
                                    </NavLink>
                            <NavLink className = 'navLink' to = '/Archive/Food' onClick = {() => props.tabSection('Food')}>
                                Food 
                                    </NavLink>
                            {/* <NavLink className = 'navLink' to = '/Comunity'> 
                                Set-Ups 
                                    </NavLink>   */}
                            <NavLink className = 'navLink' to = '/About'>
                                About
                                    </NavLink>
            </div>
        </nav>    
    )
}

export default Nav