import "../styles/nav-component.css"
import navIcon from '../content/images/card-images/icon-links/iconmonstr-menu-left-lined.svg'
import icon from "../content/images/card-images/icon-links/icons"
import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {

    let darkMode = props.darkMode
    const [widthValue , setWidthValue] = useState(0) 

    useEffect(() => {
        closeNav()
    },[props.currentTab])

    console.log(props.currentTab)

    const openNav = () => {
        setWidthValue(100);
    }
      
    /* Set the width of the sidebar to 0 (hide it) */
    const closeNav = () => {
        setWidthValue(0);
    }

    return(
        <nav className = 'navBar' id = { darkMode? "darkNav" : "lightNav"} >
                <img src = {navIcon} alt = 'nav left lines from IconMonster' className = "openbtn" onClick= {openNav} />
                <NavLink to ='/' className = 'logo'> BITTEN BYTE </NavLink>  
                <div className = 'switch-container-mobile'  onClick = {props.handleDarkMode}> 
                    <img src = {props.darkMode? icon.lightMode : icon.darkMode} alt = 'Website Dark/Light Switch' /> 
                </div>
              
            <div className = 'nav-links'> 
                <NavLink className = 'navLink' to = '/Archive/Technology' onClick = {() => props.tabSection('Technology')}>
                    Technology
                        </NavLink>
                <NavLink className = 'navLink' to = '/Archive/Hobby' onClick = {() => props.tabSection('Hobby')}>
                    Hobbies 
                        </NavLink>
                <NavLink className = 'navLink' to = '/Archive/Food' onClick = {() => props.tabSection('Food')} >
                    Food 
                        </NavLink>
                {/* <NavLink className = 'navLink' to = '/Comunity'> 
                    Set-Ups 
                        </NavLink>   */}
                <NavLink className = 'navLink' to = '/About' onClick = {() => props.tabSection('About')}>
                    About
                        </NavLink>
            </div>
            
            <div className = 'mobile-nav-links' style = {{ width : `${widthValue}%` }}> 
                
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