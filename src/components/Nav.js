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
            {navList? <div className = 'logo'> Bitten Bite </div>  
                :
                <div className = 'centered-nav'> 
                    <ul className = 'navList-left'>
                        <li>
                            Food
                            </li>
                        <li>
                            Set-Ups
                            </li>
                        <li>
                            Hobbies
                            </li>
                    </ul>
                        
                    <div className = 'logo'> Bitten Bite </div>  
                            
                    <ul className = 'navList-right'>
                        <li>
                            Technology
                            </li>
                        <li>
                            Archive
                            </li>
                        <li>
                            About
                            </li>
                    </ul>  
            </div>
            }
        </nav>    
    )
}

export default Nav