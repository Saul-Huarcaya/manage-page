import { useEffect, useState } from "react";
import styles from "../componentes/nav.module.css";

function Nav(){
    const [visible,setVisisble] = useState(false);
    const [colorHeader,setColorHeader] = useState(false);
    
    useEffect(()=>{
        const HandleScrollColor = () =>{
            
            if(window.scrollY >= 30){
                setColorHeader(true); 
            }else{
                setColorHeader(false);
            }

        }

        window.addEventListener("scroll",HandleScrollColor);
        
        return () =>{
            window.removeEventListener("scroll",HandleScrollColor);
        }
        
    },[]);


    return <header className={ colorHeader ? styles.headerWhite : styles.headerTransparente }>
    <nav className={styles.container}>
        <div className={styles.containerLogo}>
            <img src="imagenes/logo.svg" alt="logo"/>
        </div>
    
        <div className={styles.containerAmburguesa} onClick={() => setVisisble(!visible)}>
            {
                (!visible)?<img src="imagenes/icon-hamburger.svg" alt="icono de amburguesa mobile"/>
                :<img src="imagenes/icon-close.svg" alt="icono para cerrar el menu"/>
            }
        </div>

        <div className={visible? styles.containerMenu : styles.containerOculto}>
            <ul>
                <li>Pricing</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
            </ul>
        </div>
        <div className={styles.containerButton}>
            <button>Get Started</button>
        </div>
    </nav>
</header>
}

export default Nav;