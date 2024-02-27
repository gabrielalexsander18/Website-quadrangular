import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import styled from 'styled-components'

import { theme } from '../../styles/theme'
import px2vw from '../../utils/px2vw'

export const FixedComponent = styled.div`
  display: ${({ isFixed }) => (isFixed ? 'block' : 'none')};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'none')};
  bottom: ${({ isFixed }) => (isFixed ? '0px' : 'auto')};
  width: ${({ isFixed }) =>
    isFixed ? '100%' : '0'}; /* ajuste os tamanhos conforme necessário */
  height: ${({ isFixed }) => (isFixed ? '100px' : '0')};
  background-color: ${({ isFixed }) => (isFixed ? '#141414' : 'none')};
  border-radius: 10px 10px 0px 0px;
  z-index: 1;

  @media (max-width: 1440px) {
    height: ${({ isFixed }) => (isFixed ? '80px' : '0')};
  }

  @media (max-width: 1280px) {
    height: ${({ isFixed }) => (isFixed ? '70px' : '0')};
  }

  @media (max-width: 428px) {
    height: ${({ isFixed }) => (isFixed ? '60px' : '0')};
  }

  @media (max-width: 320px) {
    height: ${({ isFixed }) => (isFixed ? '50px' : '0')};
  }
`

export const ContainerFixed = styled.div`
  padding: 10px 0;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 11px;

  @media (max-width: 1280px) {
    padding: 7px 0;
    gap: 0px;
  }
`

export const ContainerTopFixed = styled.div`
  width: 100%;
  background: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 1440px) {
    gap: 10px;
  }

  @media (max-width: 1280px) {
    gap: 5px;
  }

  @media (max-width: 428px) {
    gap: 2.5px;
    width: 650px;
  }
`

export const ContainerBottonFixed = styled.div`
  width: 100%;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 165px;

  @media (max-width: 884px) {
    gap: ${px2vw(70)};
    padding-right: ${px2vw(5)};
  }

  @media (max-width: 768px) {
    gap: ${px2vw(40)};
  }

  @media (max-width: 428px) {
    gap: ${px2vw(100)};
  }
`

export const PageLinkFixed = styled.a`
  cursor: pointer;
  background: none;
  text-decoration: none;

  color: ${theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  text-align: center;

  p {
    text-decoration: underline;
  }

  @media (max-width: 1440px) {
    font-size: 20px;
  }

  @media (max-width: 428px) {
    font-size: ${px2vw(60)};
    p {
      display: none;
    }
  }
`

/// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ScrollableContent = styled.div`
  padding-top: ${({ isFixed }) =>
    isFixed ? '0px' : '0'}; /* ajuste conforme a altura do componente fixo */
  z-index: 1;
  position: sticky;
`

export const Container = styled.div`
  width: 100%;
  height: 230px;
  background-color: ${theme.colors.darkgrey};

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
`

export const PageLink = styled.a`
  cursor: pointer;
  background: none;
  text-decoration: none;

  color: ${theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  text-align: center;

  p {
    text-decoration: underline;
  }

  @media (max-width: 1440px) {
    font-size: 20px;
  }

  @media (max-width: 428px) {
    font-size: ${px2vw(60)};
  }
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
`

export const InstagramIconEdit = styled(InstagramIcon)`
  color: ${theme.colors.white};
`

export const FacebookIconEdit = styled(FacebookIcon)`
  color: ${theme.colors.white};
`
