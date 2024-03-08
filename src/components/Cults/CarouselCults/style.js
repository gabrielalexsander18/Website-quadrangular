import styled from 'styled-components'

import { theme } from '../../../styles/theme'
import px2vw from '../../../utils/px2vw'

export const ContainerCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .rec.rec-arrow {
    background-color: transparent;
    color: ${theme.colors.darkwhite};

    border: transparent;
    border-radius: 0;
  }

  .rec.rec-arrow:hover {
    border: 2px solid ${theme.colors.tiffanyblue};
    border-radius: 50%;
    background: ${theme.colors.slategray}; /* Old browsers */
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      ${theme.colors.slategray} 0%,
      ${theme.colors.darkturquoise50} 50%,
      ${theme.colors.tiffanyblue} 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      radial,
      center center,
      0px,
      center center,
      100%,
      color-stop(0%, ${theme.colors.slategray}),
      color-stop(50%, ${theme.colors.darkturquoise50}),
      color-stop(100%, ${theme.colors.tiffanyblue})
    ); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      ${theme.colors.slategray} 0%,
      ${theme.colors.darkturquoise50} 50%,
      ${theme.colors.tiffanyblue} 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(
      center,
      ellipse cover,
      ${theme.colors.slategray} 0%,
      ${theme.colors.darkturquoise50} 50%,
      ${theme.colors.tiffanyblue} 100%
    ); /* Opera 12+ */
    background: -ms-radial-gradient(
      center,
      ellipse cover,
      ${theme.colors.slategray} 0%,
      ${theme.colors.darkturquoise50} 50%,
      ${theme.colors.tiffanyblue} 100%
    ); /* IE10+ */
    background: radial-gradient(
      ellipse at center,
      ${theme.colors.slategray} 0%,
      ${theme.colors.darkturquoise50} 50%,
      ${theme.colors.tiffanyblue} 100%
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(112, 128, 144, 1)', endColorstr='#02a9b5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    color: ${theme.colors.black};
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec-dot {
    background-color: ${theme.colors.slategray50};
    box-shadow: 0 0 1px 3px ${theme.colors.slategray50};
    margin: 0 17px;
  }

  .rec-dot:hover,
  .rec-dot:active,
  .rec-dot:focus {
    box-shadow: 0 0 1px 3px ${theme.colors.slategray};
  }

  @media (max-width: 550px) {
    .rec.rec-arrow {
      display: none;
    }
  }
`

export const Item = styled.div`
  img {
    width: 286px;
    border: 1px solid ${theme.colors.cyan};
  }

  @media (max-width: 1440px) {
    img {
      width: 250px;
    }
  }

  @media (max-width: 428px) {
    img {
      width: ${px2vw(900)};
    }
  }
`
