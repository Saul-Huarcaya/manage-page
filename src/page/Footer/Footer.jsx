/* import styled from "styled-components"; */
import styles from "../Footer/footer.module.css";

function Footer(){
    return <footer className={styles.footer}>
    <div className={styles.footerContent}>
        <div className={styles.footerbox}>    
            <input type="text" placeholder="Updates in your inbox..."/>
            <div>
                <button>GO</button>
            </div>
        </div>
        <div className={styles.footerLinks}>
            <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
            </ul>
            <ul>
                <li>Careers</li>
                <li>Comunity</li>
                <li>Privaty</li>
            </ul>
        </div>
        <div className={styles.footerRedes}>
            <div className="redes">
                <a href="#">
                    <img src="imagenes/icon-facebook.svg" alt="facebook"/>
                </a>
                <a href="#">
                    <img src="imagenes/icon-youtube.svg" alt="youtube"/>
                </a>
                <a href="#">
                    <img src="imagenes/icon-twitter.svg" alt="twitter"/>
                </a>
                <a href="#">
                    <img src="imagenes/icon-pinterest.svg" alt="pinterest"/>
                </a>
                <a href="#">
                    <img src="imagenes/icon-instagram.svg" alt="instagram"/>
                </a>
            </div>
            <div>
                <div>
                    <img src="imagenes/logo2.svg" alt="logo"/>
                </div>
            </div>
        </div>
        
        <div className={styles.footerCopy}>
            <p>Copyright 2020. All Rights Reserved</p>
        </div>
    </div>
</footer>
}

export default Footer;