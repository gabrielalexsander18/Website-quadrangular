import React, { useEffect, useState } from 'react'

import {
  FixedComponent,
  ContainerFixed,
  ContainerTopFixed,
  ContainerBottonFixed,
  PageLinkFixed,
  ScrollableContent,
  Container,
  PageLink,
  ContainerTop,
  ContainerBotton,
  InstagramIconEdit,
  FacebookIconEdit
} from './style'

export function Baseboard() {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset

      // Verifica se a posição do scroll ultrapassou o componente
      if (offset > 70) {
        // ajuste o valor conforme necessário
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <FixedComponent isFixed={isFixed}>
        <ContainerFixed>
          <ContainerTopFixed>
            <PageLinkFixed style={{ cursor: 'default' }}>
              Rua Turmalina, 23 - Alto Chalé<br></br> Ouro Branco, MG
            </PageLinkFixed>
            <PageLinkFixed style={{ cursor: 'default' }}>
              36492-102
            </PageLinkFixed>
          </ContainerTopFixed>
          <ContainerBottonFixed>
            <PageLinkFixed
              href="https://www.instagram.com/ieqourobranco/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIconEdit sx={{ fontSize: 30 }} /> <p>@ieqourobranco</p>
            </PageLinkFixed>
            <PageLinkFixed
              href="https://www.facebook.com/quadrangularourobranco"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIconEdit sx={{ fontSize: 30 }} />
              <p>Quadrangular Ouro Branco</p>
            </PageLinkFixed>
          </ContainerBottonFixed>
        </ContainerFixed>
      </FixedComponent>

      <ScrollableContent isFixed={isFixed}>
        <Container>
          <ContainerTop>
            <PageLink style={{ cursor: 'default' }}>
              Rua Turmalina, 23 - Alto Chalé<br></br> Ouro Branco, MG
            </PageLink>
            <PageLink style={{ cursor: 'default' }}>36492-102</PageLink>
          </ContainerTop>
          <ContainerBotton>
            <PageLink
              href="https://www.instagram.com/ieqourobranco/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIconEdit sx={{ fontSize: 30 }} /> <p>@ieqourobranco</p>
            </PageLink>
            <PageLink
              href="https://www.facebook.com/quadrangularourobranco"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIconEdit sx={{ fontSize: 30 }} />
              <p>Quadrangular Ouro Branco</p>
            </PageLink>
          </ContainerBotton>
        </Container>
      </ScrollableContent>
    </>
  )
}
