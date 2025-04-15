import React from "react";
import "./Home.scss";
import styles from "./HomeDonate.module.scss";
import { sampleImage } from "../../assets/images/assets";
import { MdArrowRight } from "react-icons/md";

const HomeDonate = () => {
  return (
    <section className={styles.homeSection}>
      <div className={`${styles.sectionContainer} container grid`}>
        <div className={`${styles.imageDiv} grid`}>
          <img
            src={sampleImage.donate}
            alt="Food"
            className={styles.imageStyle}
          />
          <img
            src={sampleImage.donating}
            alt="Donating"
            className={`${styles.sampleDonateImage} z-2`}
          />
        </div>
        <div className={styles.headerText}>
          <h2 className="subheader-text text-2xl">
            Connects people, organizations, and communities to reduce waste
            redistribute resources, and create a more sustainable future
            together.
          </h2>
          <button className="btn flex">
            <p className="text text-1g">Donate</p>
            <MdArrowRight className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeDonate;
