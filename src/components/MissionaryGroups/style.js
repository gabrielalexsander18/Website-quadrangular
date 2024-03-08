import styled from 'styled-components'

import { theme } from '../../styles/theme'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 230px);
  background-color: ${theme.colors.black};
  padding: 46px 0 100px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 45px;

  @media (max-width: 1440px) {
    height: calc(100vh - 11.5rem);
    padding: 27px 0 70px;

    gap: 22px;
  }

  @media (max-width: 428px) {
    height: calc(100vh - 146px);
    padding: 27px 0 0px;

    gap: 22px;
  }

  @media (max-width: 320px) {
    height: calc(100vh - 9.5rem);
    padding: 20px 0 0;

    gap: 15px;
  }
`

export const Img = styled.img`
  margin: 0 40px;

  @media (max-width: 1440px) {
    width: 800px;
  }

  @media (max-width: 1024px) {
    width: 730px;
  }

  @media (max-width: 428px) {
    width: ${px2vw(1250)};
    margin: 0 ${px2vw(80)};
  }
`

export const Paragraph = styled.p`
  color: ${theme.colors.lightgray};
  font-size: 40px;
  font-weight: 400;
  text-align: justify;
  margin: 0 150px 0 107px;

  @media (max-width: 1440px) {
    margin: 0 130px 0 100px;
  }

  @media (max-width: 1024px) {
    font-size: 38px;
    margin: 0 90px 0 90px;
  }

  @media (max-width: 428px) {
    font-size: ${px2vw(100)};
    margin: 0 ${px2vw(70)} 0 ${px2vw(90)};
  }
`

export const Button = styled.button`
  display: none;
  width: 233px;
  height: 51px;
  margin-left: 107px;

  border-radius: 50px;
  background: #d9d9d9;
  box-shadow: 0px 7px 5px ${theme.colors.cyan50};

  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  color: #000000;
  font-size: 40px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 1440px) {
    margin-left: 100px;
  }

  @media (max-width: 1024px) {
    font-size: 38px;
    margin-left: 90px;
  }

  @media (max-width: 428px) {
    width: ${px2vw(600)};
    height: ${px2vw(120)};
    font-size: ${px2vw(100)};
    margin-left: ${px2vw(90)};
  }

  @media (max-width: 320px) {
    width: ${px2vw(550)};
    height: ${px2vw(110)};
    font-size: ${px2vw(95)};
    margin-left: ${px2vw(80)};
  }
`
