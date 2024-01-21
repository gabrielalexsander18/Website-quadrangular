import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  height: 230px;
  background-color: #141414;

  padding: 53px 0 19px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 11px;

  @media (max-width: 1440px) {
    height: 146px;
    padding: 5px 0;
  }

  @media (max-width: 320px) {
    height: 115px;

    gap: 8px;
  }

  /* @media (max-width: 428px) {
    height: ${px2vw(420)};
    padding: 5px 0;
  } */

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

export const PageLink = styled.a`
  cursor: pointer;
  background: none;
  text-decoration: none;

  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  text-align: center;

  /* padding-bottom: 3px; */

  /* color: ${props => (props.isActive ? '#DEB887' : '#ffffff')}; */
  /* border-bottom: ${props => props.isActive && '2px solid #DEB887'}; */
  /* font-weight: ${props => (props.isActive ? '700' : '400')}; */

  p {
    text-decoration: underline;
  }

  @media (max-width: 1440px) {
    font-size: 20px;
  }

  @media (max-width: 428px) {
    font-size: ${px2vw(60)};
  }

  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const ContainerTop = styled.div`
  width: 100%;
  background: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 1440px) {
    gap: 10px;
  }

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

export const ContainerBotton = styled.div`
  width: 100%;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 165px;

  @media (max-width: 428px) {
    gap: ${px2vw(240)};
  }

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

export const InstagramIconEdit = styled(InstagramIcon)`
  color: #ffffff;
`

export const FacebookIconEdit = styled(FacebookIcon)`
  color: #ffffff;
`
