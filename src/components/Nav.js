import "../styles/nav-component.css"
import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {

    const [widthValue , setWidthValue] = useState(0) 

    useEffect(() => {
        closeNav()
    },[props.currentTab])

    console.log(props.currentTab)

    const openNav = () => {
        setWidthValue(250);
    }
      
    /* Set the width of the sidebar to 0 (hide it) */
    const closeNav = () => {
        setWidthValue(0);
    }

    return(
        <nav className = 'navBar'>
                <button className = "openbtn" onClick= {openNav}>&#9776;</button>
                <NavLink to ='/' className = 'logo'> BITTEN BYTE </NavLink>  
            
            <div className = 'nav-links'> 
                <NavLink className = 'navLink' to = '/Archive/Technology' onClick = {() => props.tabSection('Technology')}>
                    Technology
                        </NavLink>
                <NavLink className = 'navLink' to = '/Archive/Hobby' onClick = {() => props.tabSection('Hobby')}>
                    Hobbies 
                        </NavLink>
                <NavLink className = 'navLink' to = '/Archive/Food' onClick = {() => props.tabSection('Fo00000od')} >
                    Food 
                        </NavLink>
                {/* <NavLink className = 'navLink' to = '/Comunity'> 
                    Set-Ups 
                        </NavLink>   */}
                <NavLink className = 'navLink' to = '/About' onClick = {() => props.tabSection('About')}>
                    About
                        </NavLink>
            </div>
            
            <div className = 'mobile-nav-links' style = {{ width : `${widthValue}px` }}> 
                
                <div className = "closebtn" onClick = {closeNav} > &times; </div>
                
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
                  <NavLink className = 'navLink' to = '/About' onClick = {() => props.tabSection('About')}>
                    About
                        </NavLink>
            </div>
        </nav>    
    )
}

export default Nav