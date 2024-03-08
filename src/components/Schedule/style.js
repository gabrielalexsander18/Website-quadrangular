import styled from 'styled-components'

import BackgroundImage from '../../assets/bolls_group_agenda.svg'
import { theme } from '../../styles/theme'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  background: url('${BackgroundImage}');
  background-size: cover;

  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.white};

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
`

export const Img = styled.img`
  margin: 56px 0 30px 42px;

  @media (max-width: 1440px) {
    margin: ${px2vw(15)} 0 0 ${px2vw(-30)};
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
`

export const ContainerDates = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 50px;
  padding: 50px;
  border-radius: 85px;
  background: ${theme.colors.lightgray50};
  backdrop-filter: blur(2px);

  @media (max-width: 1440px) {
    padding: ${px2vw(45)};
    margin: ${px2vw(5)} 30px;
    /* gap: ${px2vw(35)}; */

    p {
      font-size: ${px2vw(35)};
      line-height: ${px2vw(40)};
    }
  }

  @media (max-width: 428px) {
    padding: ${px2vw(70)};
    margin: ${px2vw(20)} ${px2vw(70)};
    border-radius: 35px;

    /* gap: 20px; */

    p {
      font-size: ${px2vw(90)};
      line-height: ${px2vw(125)};
    }
  }

  @media (max-width: 320px) {
    margin: ${px2vw(10)} ${px2vw(40)};

    /* gap: 10px; */

    p {
      font-size: ${px2vw(80)};
      line-height: ${px2vw(115)};
    }
  }
`

export const ContainerDays = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 15%;

  p {
    font-size: 35px;
    font-weight: 700;
    line-height: 45px;
  }

  @media (max-width: 1440px) {
    /* padding: ${px2vw(45)};
    margin: ${px2vw(5)} 30px; */
    gap: ${px2vw(35)};

    p {
      font-size: ${px2vw(35)};
      line-height: ${px2vw(40)};
    }
  }

  @media (max-width: 428px) {
    /* padding: ${px2vw(70)};
    margin: ${px2vw(20)} ${px2vw(70)};
    border-radius: 35px; */

    gap: 20px;

    p {
      font-size: ${px2vw(90)};
      line-height: ${px2vw(125)};
    }
  }

  @media (max-width: 320px) {
    /* margin: ${px2vw(10)} ${px2vw(40)}; */

    gap: 10px;

    p {
      font-size: ${px2vw(80)};
      line-height: ${px2vw(115)};
    }
  }
`

export const ContainerContains = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 85%;

  p {
    font-size: 35px;
    font-weight: 700;
    line-height: 45px;
  }

  @media (max-width: 1440px) {
    /* padding: ${px2vw(45)};
    margin: ${px2vw(5)} 30px; */
    gap: ${px2vw(30)};

    p {
      font-size: ${px2vw(35)};
      line-height: ${px2vw(40)};
    }
  }

  @media (max-width: 428px) {
    /* padding: ${px2vw(70)};
    margin: ${px2vw(20)} ${px2vw(70)};
    border-radius: 35px; */

    gap: 20px;

    p {
      font-size: ${px2vw(90)};
      line-height: ${px2vw(125)};
    }
  }

  @media (max-width: 320px) {
    /* margin: ${px2vw(10)} ${px2vw(40)}; */

    gap: 10px;

    p {
      font-size: ${px2vw(80)};
      line-height: ${px2vw(115)};
    }
  }
`
