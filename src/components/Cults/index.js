import React from 'react'

import logoCults from '../../assets/cultos.svg'
import { CarouselCults } from './CarouselCults'
import { Container, Img } from './style'

export function Cults() {
  return (
    <>
      <Container id="cults">
        <Img src={logoCults} alt="eventos" />

        <CarouselCults />
      </Container>
    </>
  )
}
