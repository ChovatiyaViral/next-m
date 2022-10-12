import AOS from "aos";
import classnames from "classnames";
import { get } from "lodash";
import Link from "next/link";
import React from "react";
import styles from "./sections.module.css";
import Slider from "./slider";

const Sections = (props) => {
  const { contentClass, sectionClasses, images = [], mobileImages = [], imageStyle } = props;
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 0);
  }, [images.length, isMobile]);

  const ImagesListing = isMobile ? mobileImages : images;

  return (
    <>
      <div className={classnames(styles.scotchWhiskyMainSection, "flex flex-1 justify-evenly rarest_society_Main relative", sectionClasses)}>
        {isMobile && ImagesListing.length > 1 ? (
          <Slider images={ImagesListing} height={400} width={500} />
        ) : (
          <div className={classnames(styles.imageDisplay, "flex-1")}>
            {Array.isArray(ImagesListing) &&
              ImagesListing.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${item})`,
                      ...imageStyle,
                    }}
                    className={styles.leftCol}
                  />
                );
              })}
          </div>
        )}
        {contentClass ? <div className={contentClass}>{getElementUI(props)}</div> : getElementUI(props)}
      </div>
    </>
  );
};

const getElementUI = (props) => {
  const { title, description, subTitle, style, backgroundImageURL, exploreOption } = props;

  return (
    <div className={classnames(styles.scotchWhisky, "flex flex-1 flex-col justify-center items-center")} style={{ backgroundImage: `url(${backgroundImageURL})`, ...style }}>
      {/* <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"> */}
      <h2>{title}</h2>
      {subTitle && <h3>{subTitle}</h3>}
      <p>
        <span className="w-full float-left mb-[42px]">{description}</span>
        {get(exploreOption, "display", false) && <Link href={get(exploreOption, "link", "#")}>{get(exploreOption, "title", "Explore More")}</Link>}
      </p>
    </div>
  );
};

export default Sections;
