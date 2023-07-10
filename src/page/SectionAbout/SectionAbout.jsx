import styles from "../SectionAbout/sectionabout.module.css";

function SectionAbout(){
    return <section className={styles.section}>
        <div className={styles.contenedorManage}>
            <h2>What´s different about Manage?</h2>
            <p >Manage provides all the functionality your team needs without complexity. Our software is tailor-made for modern digital product teams</p>
        </div>
        <div className={styles.contenedorList}>
            <article>
                <h3><span>01</span> Track company-wide progress</h3>
                <p>See how your day-to-day tasks fit into the wider vision.Go from tracking progress at the milestone level all the way done to the smallest of details Never lose sight of the bigger picture again.</p>
            </article>
            <article>
                <h3><span>02</span> Advanced built-in reports</h3>
                <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key  stakeholders informed.</p>
            </article>
            <article>
                <h3><span>03</span> Everything you need in one place</h3>
                <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents.Manage offers an all-in-one team productivity solution</p>
            </article>
        </div>
    </section>
}
export default SectionAbout;