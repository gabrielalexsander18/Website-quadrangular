import React from 'react'
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  A11y
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

import AcampCarnaval from '../../../assets/imgEvents/acamp_carnaval.svg'
import AmanCristo from '../../../assets/imgEvents/amanhecer_cristo.svg'
import RetiroPascoa from '../../../assets/imgEvents/retiro_pascoa.svg'
import Retangulo from '../../../assets/rectangle.svg'
import './styles.css'

export function CarouselEvents() {
  const breakpoints = {
    1: {
      slidesPerView: 1,
      slidesPerGroup: 1
      // spaceBetween: 20
    },
    669: {
      slidesPerView: 2,
      slidesPerGroup: 1
      // spaceBetween: 30
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 2
      // spaceBetween: 40
    },
    1300: {
      slidesPerView: 4,
      slidesPerGroup: 3
      // spaceBetween: 10
    },
    1628: {
      slidesPerView: 5,
      slidesPerGroup: 4
      // spaceBetween: 5
    }
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
        breakpoints={breakpoints}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false
        }}
        loop={true}
        keyboard={{
          enabled: true
        }}
        navigation={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        direction={'horizontal'}
        reverseDirection={true}
        className="containerEvents"
      >
        <SwiperSlide className="item">
          <img src={AcampCarnaval} alt="Acampamento de Carnaval" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={AmanCristo} alt="Amanhecer com Cristo" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={RetiroPascoa} alt="Retiro de Páscoa" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={Retangulo} alt="Imagem Retângulo" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={RetiroPascoa} alt="Retiro de Páscoa" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={AmanCristo} alt="Amanhecer com Cristo" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={Retangulo} alt="Imagem Retângulo" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={Retangulo} alt="Imagem Retângulo" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={Retangulo} alt="Imagem Retângulo" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={Retangulo} alt="Imagem Retângulo" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={Retangulo} alt="Imagem Retângulo" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={Retangulo} alt="Imagem Retângulo" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
