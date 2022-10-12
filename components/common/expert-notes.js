import classnames from 'classnames';
import React from 'react';
import Section from '../layout/content/section';
import styles from "./expert-notes.module.css";

const ExpertNotes = (props) => {
    const { title, content, btnTitle, image, noteName } = props;
    return (
        <section className={classnames(styles.expertNotesBG, noteName === "mc50" ? styles.expertNotesBGMobile : null, noteName === "mc31" ? styles.expertNotesTheOctaveBGMobile : null)} style={{ backgroundImage: `url(${image})` }}>
            <Section>
                <div className={styles.expertNotesContent}>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    {btnTitle && <span className={classnames(styles.expertNotesAddToCartBtn,"mt-[26px]")}>{btnTitle}</span>}
                </div>
            </Section>
        </section>
    );
};

export default ExpertNotes;
