import React from 'react'
import "./Home.scss";
import styles from "./HomeHeader.module.scss";
import { MdArrowRight } from "react-icons/md";

const HomeHeader = () => {
  return (
    <section className={`${styles.homeSection}`}>
      <div className={`${styles.headerContainer} container`}>
        <div className={`${styles.headerText}`}>
          <h2 className="main-font">
            Match donations instantly with AI
          </h2>
          <p className={`${styles.subtitleText}`}>
            Connecting donors to those in need based on location, urgency, and resources.
          </p>
          <button className="btn flex">
            <p className="text">
              Explore
            </p>
            <MdArrowRight className="icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeHeader