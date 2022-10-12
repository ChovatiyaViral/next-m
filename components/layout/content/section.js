import React from "react";
import classnames from "classnames";
import styles from "./section.module.css";

const Section = ({ children, className }) => {
  return (
    <div className={classnames(styles.section, className)}>{children}</div>
  );
};

export default Section;
