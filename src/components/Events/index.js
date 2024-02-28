import React from 'react'

import logoEvents from '../../assets/eventos.svg'
import lineOne from '../../assets/lines_eventos-1.svg'
import lineTwo from '../../assets/lines_eventos-2.svg'
import lineThree from '../../assets/lines_eventos-3.svg'
import { CarouselEvents } from './CarouselEvents'
import {
  Container,
  Img,
  ContainerLines,
  ImageLineOne,
  ImageLineTwo,
  ImageLineThree
} from './style'

export function Events() {
  return (
    <>
      <Container id="events">
        <Img src={logoEvents} alt="eventos" />

        <CarouselEvents />

        <ContainerLines>
          <ImageLineOne src={lineOne} />
          <ImageLineTwo src={lineTwo} />
          <ImageLineThree src={lineThree} />
        </ContainerLines>
      </Container>
    </>
  )
}
