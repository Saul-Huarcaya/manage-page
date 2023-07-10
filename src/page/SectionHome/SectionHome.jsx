import styles from "../SectionHome/sectionhome.module.css";

function SectionHome(){
    return <section className={styles.section}>
        <div className={styles.contenedorImg}>
            <img src="imagenes/illustration-intro.svg" alt="imagen principal de las estadisticas" />
        </div>
        <div className={styles.contenedorDescription}>
            <h1>Bring ereryone together to build better products.</h1>
            <p>Manage makes it simple for software teams to plan day to -day tasks while keeping the larger team goals in view.</p>
            <div>
                <button>Get Started</button>
            </div>
        </div>
    </section>
}
export default SectionHome;
