import React from 'react'
import Carousel from 'react-elastic-carousel'

import logoEvents from '../../assets/eventos.svg'
import lineOne from '../../assets/lines_eventos-1.svg'
import lineTwo from '../../assets/lines_eventos-2.svg'
import lineThree from '../../assets/lines_eventos-3.svg'
import Retangulo from '../../assets/rectangle.svg'
import {
  Container,
  Img,
  Item,
  ContainerCarousel,
  ContainerLines,
  ImageLineOne,
  ImageLineTwo,
  ImageLineThree
} from './style'

export function Events() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 400, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 600, itemsToShow: 3, itemsToScroll: 2 },
    { width: 900, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1367, itemsToShow: 5, itemsToScroll: 4 }
  ]

  return (
    <>
      <Container>
        <Img src={logoEvents} alt="eventos" />

        <ContainerCarousel>
          <Carousel
            enableAutoPlay
            autoPlaySpeed={5000}
            focusOnSelect={true}
            itemsToShow={4}
            style={{ width: '90%' }}
            breakPoints={breakPoints}
          >
            <Item>
              <img src={Retangulo} />
            </Item>
            <Item>
              <img src={Retangulo} />
            </Item>
            <Item>
              <img src={Retangulo} />
            </Item>
            <Item>
              <img src={Retangulo} />
            </Item>
            <Item>
              <img src={Retangulo} />
            </Item>
            <Item>
              <img src={Retangulo} />
            </Item>
            <Item>
              <img src={Retangulo} />
            </Item>
            <Item>
              <img src={Retangulo} />
            </Item>
            <Item>
              <img src={Retangulo} />
            </Item>
            <Item>
              <img src={Retangulo} />
            </Item>
          </Carousel>
        </ContainerCarousel>
        <ContainerLines>
          <ImageLineOne src={lineOne} />
          <ImageLineTwo src={lineTwo} />
          <ImageLineThree src={lineThree} />
        </ContainerLines>
      </Container>
    </>
  )
}
