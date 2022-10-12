import AOS from "aos";
import classnames from "classnames";
import Image from "next/image";
import React from "react";
import Section from "../layout/content/section";
import styles from "./nicks-pick-section.module.css";

const NicksPickSection = (props) => {
  const { title, subTitle, cardDetails } = props;
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className={classnames(styles.nickPickBG, "pt-[46px] sm:pt-[99px] pb-[52px] sm:pb-[114px]")}>
      <Section>
        {title && <h1>{title}</h1>}
        {subTitle && <h6>{subTitle}</h6>}
        <div className="flex flex-wrap sm:flex-nowrap gap-[8px] max-w-[362px] sm:max-w-full mx-auto sm:mx-[0px] sm:gap-[0px] items-center justify-center mt-[25px] sm:mt-[66px]">
          {cardDetails.map((item, index) => {
            return (
              <div
                className={styles.cardDiv}
                key={index}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className={styles.contentBox}>
                  <div>
                    <div className={styles.blankImage}>
                      <Image src={item.icon} width={item.width} height={item.height} layout="fixed" objectFit="contain" alt="blank" />
                    </div>
                    <h1>{item.title}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
      </Section>
    </section>
  );
};

export default NicksPickSection;
