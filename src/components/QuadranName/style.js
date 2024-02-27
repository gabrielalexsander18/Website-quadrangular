import styled from 'styled-components'

import { theme } from '../../styles/theme'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  background-color: ${theme.colors.dark};
  padding: 0 45px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 0 0 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 0 0 25px;
    gap: 20px;
  }

  @media (max-width: 428px) {
    padding: 0 0 0 ${px2vw(70)};
    gap: ${px2vw(45)};
  }
`

export const Img = styled.img`
  margin: 14px 0;

  @media (max-width: 1366px) {
    margin: 7px 0;
  }

  @media (max-width: 1024px) {
    margin: 4px 0;
    width: 100px;
  }

  @media (max-width: 768px) {
    width: 90px;
  }

  @media (max-width: 428px) {
    width: 80px;
  }

  @media (max-width: 390px) {
    width: 60px;
  }
`

export const Paragraph = styled.p`
  color: ${theme.colors.mediumwhite};
  font-size: 32px;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 31px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 428px) {
    font-size: 20px;
  }

  @media (max-width: 390px) {
    font-size: 17px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
  }
`
