import React from 'react'
import Carousel from 'react-elastic-carousel'

import AcampCarnaval from '../../../assets/imgEvents/acamp_carnaval.svg'
import AmanCristo from '../../../assets/imgEvents/amanhecer_cristo.svg'
import RetiroPascoa from '../../../assets/imgEvents/retiro_pascoa.svg'
import Retangulo from '../../../assets/rectangle.svg'
import { Item, ContainerCarousel } from './style'

export function CarouselEvents() {
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
          autoPlaySpeed={7000}
          focusOnSelect={true}
          itemsToShow={5}
          style={{ width: '90%', margin: '10px' }}
        >
          <Item>
            <img src={RetiroPascoa} />
          </Item>
          <Item>
            <img src={AcampCarnaval} />
          </Item>
          <Item>
            <img src={AmanCristo} />
          </Item>
          <Item>
            <img src={RetiroPascoa} />
          </Item>
          <Item>
            <img src={AmanCristo} />
          </Item>
          <Item>
            <img src={AcampCarnaval} />
          </Item>
          <Item>
            <img src={RetiroPascoa} />
          </Item>
          <Item>
            <img src={AmanCristo} />
          </Item>
          <Item>
            <img src={AcampCarnaval} />
          </Item>
          <Item>
            <img src={Retangulo} />
          </Item>
        </Carousel>
      </ContainerCarousel>
    </>
  )
}
