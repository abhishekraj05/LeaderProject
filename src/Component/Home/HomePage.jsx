import React from 'react'
import FutureDevelopmentArea from './FutureDevelopmentArea'
import Gallery from './Gallery'
// import ImageSlider from '../ImageSlider/ImageSlider.jsx'
import LeaderIntro from './About'

const HomePage = () => {
  return (
    <>
    <LeaderIntro />
    <FutureDevelopmentArea/>
    <Gallery/>
    </>
  )
}

export default HomePage