import React from 'react'

import {
  Container,
  PageLink,
  ContainerTop,
  ContainerBotton,
  InstagramIconEdit,
  FacebookIconEdit
} from './style'

export function Baseboard() {
  return (
    <>
      <Container>
        <ContainerTop>
          <PageLink style={{ cursor: 'default' }}>
            Rua Turmalina, 23 - Alto Chalé<br></br> Ouro Branco, MG
          </PageLink>
          <PageLink
            // href="https://wa.me/5531974006306"
            // target="_blank"
            // rel="noreferrer"
            style={{ cursor: 'default' }}
          >
            36492-102
          </PageLink>
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
    </>
  )
}
