import styled from 'styled-components'

import { theme } from '../../styles/theme'

// import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  height: 52px;
  background-color: ${theme.colors.darkgrey};
  padding: 28px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 1440px) {
    height: 34px;
    padding: 0px;
  }

  @media (max-width: 1024px) {
    height: 30px;
    padding: 0px;
  }

  @media (max-width: 428px) {
    display: none;
  }
`

export const PageLink = styled.a`
  cursor: pointer;
  background: none;
  text-decoration: none;

  font-size: 20px;
  line-height: 19px;

  color: #ffffff;

  @media (max-width: 1440px) {
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const ContainerRigth = styled.div`
  background: none;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 50px;
  }
`
