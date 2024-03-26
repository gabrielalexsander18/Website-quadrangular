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
