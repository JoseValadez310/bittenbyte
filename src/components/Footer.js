import icon from "../content/images/card-images/icon-links/icons"
import "../styles/footer-component.css"

const Footer = () => {
    return(
        <footer>
            <div className = 'footer-container'>
                <div className = 'footer-icons'>
                    <ul className = 'icon-list'>
                        <li><img src = {icon.instagram} alt = 'icons'/></li>
                        <li><img src = {icon.twitter} alt = 'icons'/></li>
                        <li><img src = {icon.linkedin} alt = 'icons'/></li>
                        <li><img src = {icon.email} alt = 'icons'/></li>
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