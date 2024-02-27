import React from 'react'

import {
  Header,
  QuadranName,
  OurMission,
  Events,
  Schedule,
  Cults,
  MissionaryGroups,
  Baseboard,
  Vision
} from '../../components'

export function Home() {
  return (
    <>
      <Header />
      <QuadranName />
      <OurMission />
      <Vision />
      <Events />
      <Schedule />
      <Cults />
      <MissionaryGroups />
      <Baseboard />
    </>
  )
}
