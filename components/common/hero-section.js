import classnames from "classnames";
import { get } from "lodash";
import Image from "next/image";
import React from "react";
import InfoBlock from "../layout/content/info-Block";
import Section from "../layout/content/section";
import styles from "./hero-section.module.css";

function HeroSection(props) {
  // const { title, images, year, mobileImages, isVideo, videoURL } = props;
  // const [isMobile, setIsMobile] = React.useState(false);

  // React.useEffect(() => {
  //   AOS.init();
  // }, []);

  // React.useEffect(() => {
  //   setIsMobile(window.innerWidth < 768);
  // }, [images.length, isMobile]);

  // const ImagesURL = isMobile ? mobileImages : images;

  const { title, subTitle, description, image, linkDetails, imageStyle } = props;

  return (
    <Section>
      <div className={classnames(styles.heroBg)} style={{ ...imageStyle }}>
        <div className="block sm:flex flex-1 items-center justify-evenly text-center h-full">
          <div className={classnames(styles.heroInfo, "flex md:flex-1 flex-col items-start justify-center")}>
            <InfoBlock tagline={subTitle} taglineColor="#C6AC85" title={title} description={description} buttonText={get(linkDetails, "title")} buttonLink={get(linkDetails, "path")} />
          </div>
          <div className={classnames(styles.heroImage, "flex-1 grow w-full sm:h-full flex items-center justify-center")}>
            <Image src="/assets/images/Macallan52.png" alt="hero bottle" width={250} height={448} objectFit="contain" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
