import React from 'react'
import FutureDevelopmentArea from './FutureDevelopmentArea'
import Gallery from './Gallery'
import LeaderIntro from './About'
import PoetryStatsSection from './PoetryStatsSection/PoetryStatsSection'
import ReliefWorkSection from './ReliefWorkSection'
import FullPageScrollText from "../FullPageScrollText/FullPageScrollText"


const HomePage = () => {
  return (
    <>
    <LeaderIntro />
    <FullPageScrollText />
    <ReliefWorkSection/>
    <FutureDevelopmentArea/>
    <PoetryStatsSection />
    <Gallery/>
    </>
  )
}

export default HomePage