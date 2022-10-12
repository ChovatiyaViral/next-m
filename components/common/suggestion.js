import classnames from "classnames";
import React from "react";
import Section from "../layout/content/section";
import styles from "./suggestion.module.css";

const Suggestion = (props) => {
  const { title, subTitle, description, image, btnText } = props;
  return (
    <section
      className={styles.suggestion_Bg}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Section className="flex h-full items-center justify-center">
        <div className={styles.suggestion_Frame}>
          <div className={classnames(styles.suggestionContent, "flex flex-col sm:flex-row justify-between items-center relative h-full sm:px-[15px] md:px-[5%] py-[74px] sm:py-[0px]")}>
            <div className={styles.mobileHeader}>
              <h1>{title}</h1>
              <h6>{subTitle}</h6>
              {btnText ? <div className={styles.suggestion_add_cart_btn}>{btnText}</div> : null}
            </div>
            <p>{description}</p>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Suggestion;
