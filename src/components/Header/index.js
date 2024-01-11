import React from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'

import { Container, PageLink, ContainerRigth } from './style'

export function Header() {
  // const navigate = useNavigate()
  // const { pathname } = useLocation()

  return (
    <>
      <Container>
        <ContainerRigth>
          <PageLink
          // onClick={() => navigate('/')} isActive={pathname === '/'}
          >
            MISSÃO
          </PageLink>

          <PageLink
          // onClick={() => navigate('/projetos')}
          // isActive={pathname.includes('/projetos')}
          >
            EVENTOS
          </PageLink>

          <PageLink
          // onClick={() => navigate('/habilidades')}
          // isActive={pathname.includes('/habilidades')}
          >
            AGENDA 2024
          </PageLink>

          <PageLink
          // onClick={() => navigate('/educacao')}
          // isActive={pathname.includes('/educacao')}
          >
            CULTOS
          </PageLink>

          <PageLink
          // onClick={() => navigate('/contatos')}
          // isActive={pathname.includes('/contatos')}
          >
            GRUPOS MISSIONÁRIOS
          </PageLink>
        </ContainerRigth>
      </Container>
    </>
  )
}
