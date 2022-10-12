import classnames from "classnames";
import React from "react";
import styles from "./tasting-notes.module.css";

const TastingNotes = (props) => {
  const { title, leftImage, rightImage, bottomPadding, topPadding, noteName, content } = props;
  return (
    <>
      <div className={classnames(styles.testNotesBG, "flex flex-col sm:flex-row flex-1 justify-evenly")}>
        <div
          className={classnames(styles.testNotesImage, "flex-1")}
          style={{
            backgroundImage: `url(${leftImage})`,
          }}
        ></div>
        <div
          className={styles.testingNotesBG}
          style={{
            backgroundImage: `url(${rightImage})`,
          }}
        >
          <div className="flex items-center h-full  sm:w-[39vw] sm:ml-[50px]">
            <div className={classnames(styles.testingNotesInnerDiv, noteName === "mc50" ? styles.testingNotesMc50 : null)} style={{ paddingTop: topPadding, paddingBottom: bottomPadding }}>
              <h2>{title}</h2>
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TastingNotes;
