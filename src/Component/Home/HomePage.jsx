import React from 'react'
import FutureDevelopmentArea from './FutureDevelopmentArea'
import Gallery from './Gallery'
import LeaderIntro from './About'
import PoetryStatsSection from './PoetryStatsSection/PoetryStatsSection'
import ReliefWorkSection from './ReliefWorkSection'
import HomeVideo from '../Videos/HomeVideo'


const HomePage = () => {
  return (
    <>
    <LeaderIntro />
    <HomeVideo />
    <ReliefWorkSection/>
    <FutureDevelopmentArea/>
    <PoetryStatsSection />
    <Gallery/>
    </>
  )
}

export default HomePage