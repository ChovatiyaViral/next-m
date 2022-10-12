import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./explore-macallan.module.css";

const ExploreMacallan = (props) => {
  const { title, subTitle, path, image } = props;

  return (
    <section className={classnames(styles.exploreSection, "block mt-[35px] sm:mt-[94px] mb:[30px] sm:mb-[34.83px] mx-auto text-center")}>
      <h1>{title}</h1>
      <Link href={path} className="cursor-pointer">
        <div className={classnames(styles.exploreProductSection, "mt-[25px] sm:mt-[37.45px] mb-[17.61px] sm:mb-[24.81px] mx-auto")}>
          <div className={styles.outerFrame}>
            <div className={styles.middleFrame}>
              <div className={styles.innerFrame}>
                <div className="flex items-center justify-center h-full align-middle my-auto">
                  <Image src={image} alt="macallan spirit" width={191.96} height={320.66} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <p>{subTitle}</p>
      <hr />
    </section>
  );
};

export default ExploreMacallan;
