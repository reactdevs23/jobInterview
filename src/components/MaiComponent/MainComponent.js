import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  title,
  tagline,

  dosData,
  dontData,
  bottomTitle,
  headerFontFamily,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <h1 className={styles.title} style={{ fontFamily: headerFontFamily }}>
          {title}
        </h1>
        <h3 className={styles.tagline} style={{ fontFamily: headerFontFamily }}>
          {tagline}
        </h3>

        <div className={styles.dosAndDonts}>
          <div className={styles.dos}>
            <div className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </div>
            {dosData.data.map((el, i) => (
              <div className={styles.box} key={i}>
                <img src={el.img} alt="#" className={styles.img} />
                <p
                  className={styles.info}
                  dangerouslySetInnerHTML={{ __html: el.info }}
                ></p>
              </div>
            ))}
          </div>
          <div className={styles.donts}>
            <div className={styles.icon}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            {dontData.data.map((el, i) => (
              <div className={styles.box} key={i}>
                <img src={el.img} alt="#" className={styles.img} />
                <p
                  className={styles.info}
                  dangerouslySetInnerHTML={{ __html: el.info }}
                ></p>
              </div>
            ))}
          </div>
        </div>
        <h4 className={styles.title} style={{ fontFamily: headerFontFamily }}>
          {bottomTitle}
        </h4>
      </div>
    </div>
  );
};

export default MainComponent;
