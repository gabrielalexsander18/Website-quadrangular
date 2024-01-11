import React from 'react'

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
      <Header />
      <QuadranName />
      <OurMission />
      <Events />
      <Schedule />
      <Cults />
      <MissionaryGroups />
      <Baseboard />
    </>
  )
}
