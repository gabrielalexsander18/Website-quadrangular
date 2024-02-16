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

  @media (max-width: 1440px) {
    gap: 22px;
  }

  @media (max-width: 1024px) {
    gap: 17px;
  }

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 428px) {
    gap: 0;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`

export const ContainerRed = styled.div`
  width: 100px;
  height: calc(100vh - (${px2vw(135)}));

  background: #b30909;

  @media (max-width: 1440px) {
    width: 60px;
    height: calc(100vh - 140px);
  }

  @media (max-width: 1024px) {
    width: 50px;
    height: calc(100vh - 122px);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: calc(100vh - 113px);
  }

  @media (max-width: 428px) {
    width: ${px2vw(360)};
    height: calc(100vh - 75px);
  }

  @media (max-width: 390px) {
    height: calc(100vh - (${px2vw(219)}));
  }
`

export const ContainerYellow = styled.div`
  width: 100px;
  height: calc(100vh - (${px2vw(135)}));

  background: #ffec3c;

  @media (max-width: 1440px) {
    width: 60px;
    height: calc(100vh - 140px);
  }

  @media (max-width: 1024px) {
    width: 50px;
    height: calc(100vh - 122px);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: calc(100vh - 113px);
  }

  @media (max-width: 428px) {
    width: ${px2vw(360)};
    height: calc(100vh - 75px);
  }

  @media (max-width: 390px) {
    height: calc(100vh - (${px2vw(219)}));
  }
`

export const ContainerBlue = styled.div`
  width: 100px;
  height: calc(100vh - (${px2vw(135)}));

  background: #081a77;

  @media (max-width: 1440px) {
    width: 60px;
    height: calc(100vh - 140px);
  }

  @media (max-width: 1024px) {
    width: 50px;
    height: calc(100vh - 122px);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: calc(100vh - 113px);
  }

  @media (max-width: 428px) {
    width: ${px2vw(360)};
    height: calc(100vh - 75px);
  }

  @media (max-width: 390px) {
    height: calc(100vh - (${px2vw(219)}));
  }
`

export const ContainerPurple = styled.div`
  width: 100px;
  height: calc(100vh - (${px2vw(135)}));

  background: #611093;

  @media (max-width: 1440px) {
    width: 60px;
    height: calc(100vh - 140px);
  }

  @media (max-width: 1024px) {
    width: 50px;
    height: calc(100vh - 122px);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: calc(100vh - 113px);
  }

  @media (max-width: 428px) {
    width: ${px2vw(360)};
    height: calc(100vh - 75px);
  }

  @media (max-width: 390px) {
    height: calc(100vh - (${px2vw(219)}));
  }
`

export const ContainerRight = styled.div`
  width: 100%;
  margin: 14px 25px 14px 0;
  padding: 25px 56px 25px 35px;
  border-radius: 69px;
  background: rgba(217, 217, 217, 0.5);
  backdrop-filter: blur(2px);

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: none;

  @media (max-width: 1440px) {
    padding: 20px 40px 20px 27px;
    margin: 7px 12px 14px 0;
  }

  @media (max-width: 1024px) {
    padding: 15px 25px 15px 25px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px 10px 20px;
  }

  @media (max-width: 428px) {
    position: absolute;
    top: 74px;
    z-index: 1;
    border-radius: 0;
    margin: 0;
    padding: 10px ${px2vw(15)} 6px ${px2vw(7)};
    width: 100vw;
    height: calc(100vh - 74px);
    background: rgba(217, 217, 217, 0.6);
  }

  @media (max-width: 390px) {
    height: calc(100vh - 57px);
    top: 57px;
  }

  @media (max-width: 320px) {
    height: calc(100vh - 48px);
    top: 57.5px;
    padding: 5px ${px2vw(7)} 6px 0;
  }
`

export const MissionOur = styled.img`
  @media (max-width: 1440px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 270px;
  }

  @media (max-width: 428px) {
    position: relative;
    width: 230px;
  }

  @media (max-width: 320px) {
    width: 160px;
  }
`

export const ContainerP = styled.div`
  width: ${px2vw(1000)};
  padding-left: 21px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: none;

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-left: 16px;
  }

  @media (max-width: 428px) {
    position: relative;
    padding-left: 14px;
  }

  @media (max-width: 390px) {
    padding-left: 10px;
  }

  @media (max-width: 320px) {
    padding-left: 3.5px;
  }
`

export const Caption = styled.p`
  font-size: 35px;
  font-weight: 600;
  line-height: normal;
  margin: 20px 0 5px;

  @media (max-width: 1440px) {
    font-size: 25px;
    margin: 15px 0 5px;
  }

  @media (max-width: 768px) {
    font-size: 23px;
  }

  @media (max-width: 428px) {
    position: relative;
    font-size: 22px;
  }

  @media (max-width: 390px) {
    font-size: 21px;
  }

  @media (max-width: 320px) {
    font-size: 17px;
    margin-top: 7px;
  }
`
export const Paragraph = styled.p`
  font-size: 35px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1440px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 23px;
  }

  @media (max-width: 428px) {
    position: relative;
    font-size: 22px;
  }

  @media (max-width: 390px) {
    font-size: 20.5px;
  }

  @media (max-width: 320px) {
    font-size: 16.5px;
  }
`
