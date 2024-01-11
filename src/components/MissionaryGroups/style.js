import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 230px);
  background-color: #000000;
  padding: 46px 0 100px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 45px;

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

export const Img = styled.img`
  margin: 0 40px;
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const Paragraph = styled.p`
  color: #d9d9d9;
  font-size: 40px;
  font-weight: 400;
  margin: 0 150px 0 107px;

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

export const Button = styled.button`
  width: 233px;
  height: 51px;
  margin-left: 107px;

  border-radius: 50px;
  background: #d9d9d9;
  box-shadow: 0px 7px 5px rgba(0, 240, 255, 0.5);

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