import React from 'react';
import "../../styles/App.css";
import HomeHeader from "./HomeHeader.jsx";
import HomeDonate from './HomeDonate.jsx';

const HomePage = () => {
  return (
    <>
      <HomeHeader/>
      <HomeDonate/>
    </>
  )
}

export default HomePage