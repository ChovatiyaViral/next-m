import classnames from 'classnames';
import Image from 'next/image';
import React from 'react';
import Section from '../layout/content/section';
import styles from "./flavour-wheel.module.css";

const FlavourWheel = (props) => {
    const { title, subTitle, image } = props;
    return (
        <section className={classnames(styles.flavourWheelBG, "relative")} style={{
            backgroundImage: `url(${image})`
        }}>
            <div className={styles.mobileFlavourWheelBg}>
                <Section className="pt-[30px] sm:pt-[43px] pb-[40.48px] px-[20px] md:px-[0px] lg:px-40 sm:flex flex-col h-full items-center sm:justify-center flex-wrap">
                    {/* <h6>{subTitle}</h6> */}
                    <div>
                        <h1>{title}</h1>
                        <hr />
                    </div>
                    <div className='sm:flex items-center justify-center gap-x-10'>
                        <div className={styles.chart}>
                            <div className={styles.chartSection}>
                                <h2>before octave</h2>
                                <Image
                                    src="/assets/images/flavour-while-chart.png"
                                    alt="chart"
                                    width={537}
                                    height={439}
                                />
                            </div>
                            <p>“ The liveliness of the palate fades to a wonderful warming complexity. The maltiness reappears offering a wonderfully moreish almost refreshing whisky.”</p>
                        </div>
                        <div className={styles.chart}>
                            <div className={styles.chartSection}>
                                <h2>after octave</h2>
                                <Image
                                    src="/assets/images/flavour-while-chart-1.png"
                                    alt="chart"
                                    width={537}
                                    height={439}
                                />
                            </div>
                            <p>“ A wonderfully clean spirit married to perfection with the exuberant cask. The spice of the palate fades to a warming sweetness.”</p>
                        </div>
                    </div>
                </Section>
            </div>

        </section >
    );
};

export default FlavourWheel;