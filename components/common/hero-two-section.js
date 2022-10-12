import classnames from 'classnames';
// import Link from 'next/link';
import React from 'react';
import styles from "./hero-two-section.module.css";

const HeroTwoSection = () => {
    return (
        <section className={classnames(styles.heroTwoBG, "flex mb-[109px] sm:mb-[0px] items-center justify-center")}>
            <div className={classnames(styles.heroInnerDiv, "my-[42px] mx-auto")}>
                <div className={classnames(styles.outerFrame, "flex items-center justify-center")}>
                    <div className={styles.heroContent}>
                        <h6>The Macallan Collection</h6>
                        <h1>AN OLD AND RARE <br /> WHISKY FROM <br />MACALLAN DISTILLERY</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroTwoSection;
