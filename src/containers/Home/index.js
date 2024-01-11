import { SpeedInsights } from '@vercel/speed-insights/next'
import React from 'react'

// import LogoPortfolio from '../../assets/logo-portfolio.png'
import {
  Header,
  QuadranName,
  OurMission,
  Events,
  Schedule,
  Cults,
  MissionaryGroups,
  Baseboard
} from '../../components'
// import {
//   Container
//   // LogoPortfolioEdit,
//   // ContainerLeft,
//   // ContainerRigth,
//   // Line
// } from './style'

export function Home() {
  return (
    <>
      {/* <Container> */}
      <Header />
      <QuadranName />
      <OurMission />
      <Events />
      <Schedule />
      <Cults />
      <MissionaryGroups />
      <Baseboard />
      <SpeedInsights />
      {/* </Container> */}
    </>
  )
}
