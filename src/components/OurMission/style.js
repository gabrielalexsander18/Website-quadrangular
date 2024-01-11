import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 32px;

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

export const ContainerLeft = styled.div`
  /* width: 100%; */
  background-color: #ffffff;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

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

export const ContainerRed = styled.div`
  width: 100px;
  height: calc(100vh - 176px);

  background: #b30909;
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const ContainerYellow = styled.div`
  width: 100px;
  height: calc(100vh - 176px);

  background: #ffec3c;

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

export const ContainerBlue = styled.div`
  width: 100px;
  height: calc(100vh - 176px);

  background: #081a77;

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

export const ContainerPurple = styled.div`
  width: 100px;
  height: calc(100vh - 176px);

  background: #611093;

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

export const ContainerRight = styled.div`
  width: 100%;
  height: 100%;
  margin: 14px 25px 14px 0;
  padding: 25px 56px 25px 35px;
  border-radius: 69px;
  background: rgba(217, 217, 217, 0.5);
  backdrop-filter: blur(2px);

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: none;

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

export const MissionOur = styled.img`
  /* position: absolute; */

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

export const ContainerP = styled.div`
  width: 1300px;
  padding-left: 21px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: none;

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

export const Caption = styled.p`
  font-size: 35px;
  font-weight: 600;
  line-height: normal;
  margin: 20px 0 5px;

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
export const Paragraph = styled.p`
  font-size: 35px;
  font-weight: 400;
  line-height: normal;

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
