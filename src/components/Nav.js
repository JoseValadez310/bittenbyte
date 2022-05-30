import {useState} from 'react'
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
                    <Link to = '/Food'>
                        Food 
                            </Link>
                    <Link to = '/Comunity'> 
                        Set-Ups 
                            </Link>  
                    <Link to = '/Hobby'> 
                        Hobbies 
                            </Link>
                
                <Link to ='/Home' className = 'logo'> Bitten Bite </Link>      
                    
                    <Link to = '/Technology'>
                        Technology
                            </Link>
                    <Link to = '/Archive'>
                        Archive
                            </Link>
                    <Link to = '/About'>
                        About
                            </Link>
            </div>
        </nav>    
    )
}

export default Nav