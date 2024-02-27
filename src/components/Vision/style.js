import styled from 'styled-components'

import { theme } from '../../styles/theme'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  background-color: ${theme.colors.slategrayblue};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h5 {
    width: 61%;
    font-size: 35px;
    font-weight: 600;
    line-height: 37px;
    text-align: justify;
    color: ${theme.colors.mediumwhite};
  }

  @media (max-width: 1440px) {
    h5 {
      width: 59%;
      font-size: 27px;
      line-height: 29px;
    }
  }

  @media (max-width: 1024px) {
    h5 {
      width: 70%;
      font-size: 26px;
      line-height: 28px;
    }
  }

  @media (max-width: 428px) {
    h5 {
      width: 90%;
      font-size: ${px2vw(80)};
      line-height: ${px2vw(82)};
    }
  }

  @media (max-width: 320px) {
    h5 {
      width: 90%;
      font-size: ${px2vw(75)};
      line-height: ${px2vw(77)};
    }
  }
`

export const Img = styled.img`
  width: 750px;
  z-index: 1;

  @media (max-width: 1440px) {
    width: 524px;
  }

  @media (max-width: 428px) {
    width: ${px2vw(1300)};
  }
`

export const ContainerBotton = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  padding: 20px 0;
  margin: 20px;
  border: 1px solid ${theme.colors.lightgray};
  border-radius: 20px;

  @media (max-width: 1440px) {
    width: 85%;

    padding: 10px 0;
  }

  @media (max-width: 1024px) {
    width: 95%;

    padding: 10px 0;
  }

  @media (max-width: 834px) {
    gap: 5px;
    padding: 5px;
  }
`

export const ImgSimbolos = styled.img`
  height: 500px;
  z-index: 1;

  @media (max-width: 1440px) {
    height: 350px;
  }

  @media (max-width: 428px) {
    height: ${px2vw(1200)};
  }
`

export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 80px;

  p {
    font-size: 37px;
    font-weight: 400;
    line-height: 39px;
    color: ${theme.colors.darkwhite};
  }

  @media (max-width: 1440px) {
    gap: 55px;

    p {
      font-size: 30px;
      line-height: 32px;
    }
  }

  @media (max-width: 1024px) {
    gap: 54px;

    p {
      font-size: 25px;
      line-height: 27px;
    }
  }

  @media (max-width: 428px) {
    gap: ${px2vw(110)};

    p {
      font-size: ${px2vw(80)};
      line-height: ${px2vw(82)};
    }
  }
`
