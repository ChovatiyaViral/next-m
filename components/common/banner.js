import "animate.css";
import classnames from "classnames";
import { get } from "lodash";
import Link from "next/link";
import React from "react";
import Section from "../layout/content/section";
import styles from "./banner.module.css";

const Banner = (props) => {
  const { title, subTitle, image, linkDetails } = props;
  return (
    <Section>
      <div
        className={classnames(styles.banner_bg)}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={classnames(styles.banner_content, "flex flex-col justify-center items-start h-[100%]")}>
          <div>
            {title && <h1 className={styles.banner_title}>{title}</h1>}
            {subTitle && <h6 className={styles.banner_sub_title}>{subTitle}</h6>}
          </div>
          {linkDetails && (
            <Link href={get(linkDetails, "path")} className={styles.banner_btn}>
              {get(linkDetails, "title")}
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Banner;
