import React from 'react'
import Carousel from 'react-elastic-carousel'

import PapoJovem from '../../../assets/imgCults/papoJovem.svg'
import Retangulo from '../../../assets/rectangle.svg'
import { Item, ContainerCarousel } from './style'

export function CarouselCults() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 5, itemsToScroll: 4 }
  ]

  return (
    <>
      <ContainerCarousel>
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={10000}
          focusOnSelect={true}
          itemsToShow={5}
          style={{ width: '90%', margin: '10px' }}
        >
          <Item>
            <img src={PapoJovem} />
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
    </>
  )
}
