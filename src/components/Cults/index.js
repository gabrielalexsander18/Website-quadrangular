import React from 'react'
import Carousel from 'react-elastic-carousel'

import logoCults from '../../assets/cultos.svg'
import Retangulo from '../../assets/rectangle.svg'
import { Container, Img, Item, ContainerCarousel } from './style'

export function Cults() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 5, itemsToScroll: 4 }
  ]

  return (
    <>
      <Container>
        <Img src={logoCults} alt="eventos" />

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
      </Container>
    </>
  )
}
