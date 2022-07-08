import instagram from '../content/images/card-images/icon-links/iconmonstr-instagram-1.svg'
import twitter from '../content/images/card-images/icon-links/iconmonstr-twitter-3.svg'
import email from '../content/images/card-images/icon-links/iconmonstr-email-13.svg'
import linkedin from '../content/images/card-images/icon-links/iconmonstr-linkedin-3.svg'
import "../styles/footer-component.css"

const Footer = () => {
    return(
        <footer>
            <div className = 'footer-container'>
                <div className = 'footer-icons'>
                    <ul className = 'icon-list'>
                        <li><img src = {instagram} alt = 'icons'/></li>
                        <li><img src = {twitter} alt = 'icons'/></li>
                        <li><img src = {linkedin} alt = 'icons'/></li>
                        <li><img src = {email} alt = 'icons'/></li>
                    </ul>
                </div>
                <div className = 'footer-summary'>
                    <small>Copyright © 2022 Bitten Byte, development.</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer