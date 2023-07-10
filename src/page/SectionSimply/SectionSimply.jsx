import styles from "../SectionSimply/sectionsimply.module.css";

function SectionSimply(){
    return <section className={styles.section}>
        <div className={styles.container}>
            <h2>Simplify how your team works today.</h2>
            <div>
                <button>Get Started</button>
            </div>
        </div>
    </section>
}

export default SectionSimply;