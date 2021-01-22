import * as React from 'react';
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <br/>
            <div id="footer" className="footer-copyright text-center py-3 mb-1">&copy; 2021 Copy Rights. Design by{" "}
                <a href="https://capslocktechnologies.netlify.app/" rel="nofollow" className="text-centre">
                    CapsLock Technologies
                </a>
            </div>
        </footer>
    );
}
    export default Footer;
