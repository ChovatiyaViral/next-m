import AOS from "aos";
import classnames from "classnames";
import { get } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Section from "../layout/content/section";
import styles from "./collection.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

function Collection(props) {
  const { height, width, title, subTitle, sliderDetails } = props;

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={classnames(styles.collection_bg, "pt-[46.85px] collection_slider")}>
      <Section>
        <div className={classnames(styles.slider__listing)}>
          <h1 className={styles.slider_title}>{title}</h1>
          <div className="sm:w-[40%]">
            <Carousel
              ssr
              responsive={responsive}
              infinite={get(props, "infinite", true)}
              partialVisible={get(props, "partialVisible", false)}
              itemClass={get(props, "itemClass")}
              autoPlaySpeed={get(props, "autoPlaySpeed", 1000)}
              keyBoardControl={get(props, "keyBoardControl", true)}
              swipeable={get(props, "swipeable", true)}
              draggable={get(props, "draggable", true)}
              showDots={get(props, "showDots", false)}
              removeArrowOnDeviceType={get(props, "removeArrowOnDeviceType", [])}
            >
              {get(sliderDetails, "images", []).map((item, index) => {
                return (
                  <div className={classnames(styles.image_div)} key={index}>
                    <Image src={item} height={height} width={width} alt="events" />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <div className={classnames(styles.slide_details, "flex-1")}>
              <p>{get(sliderDetails, "slideDescription", "")}</p>
              <hr className="hidden sm:block mt-[35px] md:mt-[35px] xl:mt-[59px] mb-[35px] md:mb-[35px] xl:mb-[53px]" />
              <Link href="https://thespiritsembassy.com/collections/the-octave">
                <span className="cursor-pointer">{get(sliderDetails, "btnText", "")}</span>
              </Link>
              <hr className="block sm:hidden mt-[25px]" />
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Collection;
