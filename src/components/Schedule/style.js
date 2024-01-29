import styled from 'styled-components'

import BackgroundImage from '../../assets/bolls_group_agenda.svg'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  background: url('${BackgroundImage}');
  background-size: cover;

  width: 100%;
  height: 100vh;
  background-color: #ffffff;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1440px) {
    gap: 15px;
  }

  @media (max-width: 1024px) {
    gap: 25px;
  }

  @media (max-width: 428px) {
    gap: ${px2vw(55)};
  }

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
  margin: 56px 0 30px 42px;

  @media (max-width: 1440px) {
    margin: ${px2vw(35)} 0 0 0;
  }

  @media (max-width: 1024px) {
    margin: ${px2vw(150)} 0 0 ${px2vw(-50)};
  }

  @media (max-width: 428px) {
    margin: ${px2vw(120)} 0 ${px2vw(0)} ${px2vw(-110)};
    width: ${px2vw(1450)};
  }

  @media (max-width: 320px) {
    margin: ${px2vw(100)} 0 ${px2vw(0)} ${px2vw(-110)};
    width: ${px2vw(1150)};
  }

  /* z-index: 1; */
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const ContainerDates = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100%;
  position: absolute;
  z-index: 0; */
  /* cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: #000000;
  margin-left: 20px; */

  /* margin: 14px 0; */
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

export const ContainerImgDate = styled.div`
  padding: 50px;
  border-radius: 85px;
  background: rgba(217, 217, 217, 0.5);
  backdrop-filter: blur(2px);

  display: flex;
  flex-direction: column;
  gap: 50px;

  p {
    font-size: 35px;
    font-weight: 700;
    line-height: 45px;
  }

  @media (max-width: 1440px) {
    padding: 45px;
    margin: 10px 30px;
    gap: 40px;
  }

  @media (max-width: 1024px) {
    /* padding: 15px 25px; */
    /* p {
      font-size: 35px;
      font-weight: 700;
      line-height: 40px;
    } */
  }

  @media (max-width: 428px) {
    padding: ${px2vw(70)};
    margin: ${px2vw(20)} ${px2vw(70)};
    border-radius: 35px;

    gap: 20px;

    p {
      font-size: ${px2vw(90)};
      line-height: ${px2vw(125)};
    }
  }

  @media (max-width: 320px) {
    margin: ${px2vw(10)} ${px2vw(40)};

    gap: 10px;

    p {
      font-size: ${px2vw(80)};
      line-height: ${px2vw(115)};
    }
  }

  /* position: absolute;
  left: 0px;
  bottom: 0; */
  /* cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: #000000;
  margin-left: 20px; */

  /* margin: 14px 0; */
  /* @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  } */
`

// export const ImageDates = styled.img`
//   width: ${px2vw(925)};

//   @media (max-width: 1024px) {
//     width: 950px;
//   }

//   @media (max-width: 768px) {
//     width: 710px;
//   }

//   @media (max-width: 428px) {
//     width: ${px2vw(1370)};
//   }
//   /* position: absolute;
//   left: 0px;
//   bottom: 0; */
//   /* cursor: pointer;
//   width: 10px;
//   height: 10px;
//   background-color: #000000;
//   margin-left: 20px; */

//   /* margin: 14px 0; */
//   /* @media (max-width: 768px) {
//     font-size: 13px;
//   }

//   @media (max-width: 425px) {
//     font-size: ${px2vw(50)};
//   } */
// `
