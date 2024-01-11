import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  background-color: #040000;
  padding: 0 45px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;

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
  margin: 14px 0;

  @media (max-width: 1366px) {
    margin: 7px 0;
  }

  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const Paragraph = styled.p`
  color: #faf3f3;
  font-size: 32px;
  font-weight: 400;

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
