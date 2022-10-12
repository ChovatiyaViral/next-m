import AOS from "aos";
import classnames from "classnames";
import { get } from "lodash";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./slider.module.css";

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

function Slider(props) {
  const { images, height, width, title, content, subTitle, sliderDetails } = props;

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classnames(styles.slider__listing)}>
      <h6 className={styles.slider_sub_title}>{subTitle}</h6>
      <h1 className={styles.slider_title}>{title}</h1>
      <hr className="mb-[30px] mx-[35px] md:mx-[0] md:mb-[37.95px] w-[full] md:w-[322.73px]"></hr>
      
      <div className="md:w-[50%]">
        <Carousel
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
              <div key={index} className={classnames(styles.item_image, "mb-[65px]")}>
                <Image src={item} height={height} width={width} alt="events" />
              </div>
            );
          })}
        </Carousel>
      </div>
      
      <div className={styles.slide_details}>
        <h6>{get(sliderDetails, "slideTitle", "")}</h6>
        <p>{get(sliderDetails, "slideDescription", "")}</p>
      </div>

      <hr className="mb-[24px] md:mb-[72.47px] mt-[44px] md:mt-[0px] mx-[35px] md:mx-[0] md:w-[322.73px]"></hr>
    </div>
  );
}

export default Slider;
