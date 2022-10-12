import classnames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "./info-block.module.css";
import Button from "/components/layout/content/button";

const InfoBlock = (props) => {
  const {
    containerStyle,

    tagline,
    taglineColor,

    title,
    titleColor,
    titleArray,

    description,
    descriptionStyle,

    afterDescriptionSection,

    buttonText,
    buttonStyle,
    buttonLink,

    hasLearnMore,
    hasLearnMorestyle,
  } = props;

  const renderTitleSection = (details, isArray) => {
    return (
      <>
        <span
          style={{ color: details.titleColor }}
          dangerouslySetInnerHTML={{
            __html: details.title + (isArray ? " " : ""),
          }}
        />
      </>
    );
  };

  const renderTitle = () => {
    if (titleArray) {
      const titleElements = [];
      for (let i = 0, titleSection; (titleSection = titleArray[i]); i++) {
        titleElements.push(renderTitleSection(titleSection, true));
      }

      return titleElements;
    } else {
      return renderTitleSection({ title, titleColor });
    }
  };

  return (
    <div className={classnames("info-block-container flex flex-col justify-start", styles.infoBlock, containerStyle)}>
      {tagline && (
        <h4 className={styles.tagline} style={{ color: taglineColor ? taglineColor : "#363755" }}>
          {tagline}
        </h4>
      )}
      <h2 className={styles.titleBlock}>{renderTitle()}</h2>

      {description && (
        <div className={styles.description} style={descriptionStyle}>
          {description}
        </div>
      )}
      {afterDescriptionSection && afterDescriptionSection()}
      <Button className={buttonStyle}>
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
      {hasLearnMore && <div className={styles.hasLearnMorestyle}>{hasLearnMore}</div>}
    </div>
  );
};

export default InfoBlock;
