import React from 'react'
import FutureDevelopmentArea from './FutureDevelopmentArea'
import Gallery from './Gallery'
import ImageSlider from './ImageSlider'
import LeaderIntro from './About'

const HomePage = () => {
  return (
    <>
    <ImageSlider />
    <LeaderIntro />
    <FutureDevelopmentArea/>
    <Gallery/>
    </>
  )
}

export default HomePage