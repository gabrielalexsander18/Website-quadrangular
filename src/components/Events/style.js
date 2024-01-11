import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #040000;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;

  .rec.rec-arrow {
    background-color: transparent;
    color: #efefef;

    border: transparent;
    border-radius: 0;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #00f0ff;
    border-radius: 50%;
    /* background-color: #efefef; */
    background: rgba(0, 245, 255, 0.8); /* Old browsers */
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 245, 255, 0.8) 0%,
      rgba(0, 191, 255, 0.5) 50%,
      #040000 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      radial,
      center center,
      0px,
      center center,
      100%,
      color-stop(0%, rgba(0, 245, 255, 0.8)),
      color-stop(50%, rgba(0, 191, 255, 0.5)),
      color-stop(100%, #040000)
    ); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 245, 255, 0.8) 0%,
      rgba(0, 191, 255, 0.5) 50%,
      #040000 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 245, 255, 0.8) 0%,
      rgba(0, 191, 255, 0.5) 50%,
      #040000 100%
    ); /* Opera 12+ */
    background: -ms-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 245, 255, 0.8) 0%,
      rgba(0, 191, 255, 0.5) 50%,
      #040000 100%
    ); /* IE10+ */
    background: radial-gradient(
      ellipse at center,
      rgba(0, 245, 255, 0.8) 0%,
      rgba(0, 191, 255, 0.5) 50%,
      #040000 100%
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(0, 245, 255, 0.8)', endColorstr='#040000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    color: #000000;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec-dot {
    background-color: rgba(0, 245, 255, 0.5);
    box-shadow: 0 0 1px 3px rgba(0, 245, 255, 0.5);
    margin: 0 17px;
  }

  .rec-dot:hover,
  .rec-dot:active,
  .rec-dot:focus {
    box-shadow: 0 0 1px 3px rgba(0, 245, 255);
  }

  /* @media (max-width: 1008px) {
    width: 450px;
    height: 60px;
  }

  @media (max-width: 768px) {
    width: 375px;
    height: 55px;
  }

  @media (max-width: 425px) {
    width: 100vw;
    height: ${px2vw(215)};
    background-color: #1c1a1a;
    top: auto;
    bottom: 0;
    right: auto;
    border-radius: 10px 10px 0 0;

    position: fixed;
    z-index: 1;
  } */
`

export const ContainerCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* margin-top: 20px;
  width: 100px;
  height: 100px;
  background-color: #00f0ff; */
  /* margin: 14px 0; */
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const Img = styled.img`
  margin: 63px 0 0 84px;
  z-index: 1;
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const Item = styled.div`
  img {
    width: 286px;
    border: 1px solid #00f0ff;
  }

  /* color: #ffffff;
  font-size: 32px;
  font-weight: 400; */
  /* @media (max-width: 1008px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 425px) {
    gap: ${px2vw(50)};
  } */
`

export const ContainerLines = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  /* cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: #000000;
  margin-left: 20px; */

  /* margin: 14px 0; */
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const ImageLineOne = styled.img`
  position: absolute;
  right: 0px;
  /* cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: #000000;
  margin-left: 20px; */

  /* margin: 14px 0; */
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const ImageLineTwo = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0;
  /* cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: #000000;
  margin-left: 20px; */

  /* margin: 14px 0; */
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const ImageLineThree = styled.img`
  position: absolute;
  left: 0px;
  bottom: 0;
  /* cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: #000000;
  margin-left: 20px; */

  /* margin: 14px 0; */
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`