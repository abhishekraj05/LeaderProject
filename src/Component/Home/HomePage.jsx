import React from 'react'
import FutureDevelopmentArea from './FutureDevelopmentArea'
import Gallery from './Gallery'
// import ImageSlider from '../ImageSlider/ImageSlider.jsx'
import LeaderIntro from './About'
import PoetryStatsSection from './PoetryStatsSection/PoetryStatsSection'

const HomePage = () => {
  return (
    <>
    <LeaderIntro />
    <FutureDevelopmentArea/>
    <Gallery/>
    <PoetryStatsSection />
    </>
  )
}

export default HomePage