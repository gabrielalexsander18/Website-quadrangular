import styled from 'styled-components'

import { theme } from '../../styles/theme'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.dark};

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;

  .rec.rec-arrow {
    background-color: transparent;
    color: ${theme.colors.darkwhite};

    border: transparent;
    border-radius: 0;
  }

  .rec.rec-arrow:hover {
    border: 2px solid ${theme.colors.cyan};
    border-radius: 50%;
    background: ${theme.colors.aquan80}; /* Old browsers */
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      ${theme.colors.aquan80} 0%,
      ${theme.colors.deepskyblue50} 50%,
      ${theme.colors.dark} 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      radial,
      center center,
      0px,
      center center,
      100%,
      color-stop(0%, ${theme.colors.aquan80}),
      color-stop(50%, ${theme.colors.deepskyblue50}),
      color-stop(100%, ${theme.colors.dark})
    ); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      ${theme.colors.aquan80} 0%,
      ${theme.colors.deepskyblue50} 50%,
      ${theme.colors.dark} 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(
      center,
      ellipse cover,
      ${theme.colors.aquan80} 0%,
      ${theme.colors.deepskyblue50} 50%,
      ${theme.colors.dark} 100%
    ); /* Opera 12+ */
    background: -ms-radial-gradient(
      center,
      ellipse cover,
      ${theme.colors.aquan80} 0%,
      ${theme.colors.deepskyblue50} 50%,
      ${theme.colors.dark} 100%
    ); /* IE10+ */
    background: radial-gradient(
      ellipse at center,
      ${theme.colors.aquan80} 0%,
      ${theme.colors.deepskyblue50} 50%,
      ${theme.colors.dark} 100%
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(0, 245, 255, 0.8)', endColorstr='#040000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    color: ${theme.colors.black};
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec-dot {
    background-color: ${theme.colors.aquan50};
    box-shadow: 0 0 1px 3px ${theme.colors.aquan50};
    margin: 0 17px;
  }

  .rec-dot:hover,
  .rec-dot:active,
  .rec-dot:focus {
    box-shadow: 0 0 1px 3px ${theme.colors.aquan};
  }

  @media (max-width: 1440px) {
    gap: 3px;
  }
`

export const Img = styled.img`
  margin: 63px 0 0 84px;
  z-index: 1;

  @media (max-width: 1440px) {
    margin: ${px2vw(35)} 0 0 ${px2vw(80)};
  }

  @media (max-width: 428px) {
    width: ${px2vw(1150)};
  }

  @media (max-width: 320px) {
    margin: ${px2vw(100)} 0 ${px2vw(0)} ${px2vw(30)};
    width: ${px2vw(1150)};
  }
`

export const ContainerLines = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`

export const ImageLineOne = styled.img`
  position: absolute;
  right: 0px;

  @media (max-width: 428px) {
    width: 100px;
  }
`

export const ImageLineTwo = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0;

  @media (max-width: 428px) {
    width: 200px;
  }
`

export const ImageLineThree = styled.img`
  position: absolute;
  left: 0px;
  bottom: 0;

  @media (max-width: 428px) {
    width: 200px;
  }
`
