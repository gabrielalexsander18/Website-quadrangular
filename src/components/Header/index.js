import React from 'react'
import { Link } from 'react-scroll'
// import { useNavigate } from 'react-router-dom'

// useLocation
import { Container, ContainerRigth, PageLink } from './style'

export function Header() {
  // const navigate = useNavigate()
  // const { pathname } = useLocation()

  return (
    <>
      <Container>
        <ContainerRigth>
          <PageLink /* style={{ cursor: 'default' }} */>
            <Link
              to="vision"
              smooth={true}
              duration={500}
              // offset={-20}
            >
              VISÃO
            </Link>
          </PageLink>

          <PageLink>
            <Link
              to="events"
              smooth={true}
              duration={500}
              // offset={-20}
            >
              EVENTOS
            </Link>
          </PageLink>

          <PageLink>
            <Link
              to="schedule"
              smooth={true}
              duration={500}
              // offset={-20}
            >
              AGENDA 2024
            </Link>
          </PageLink>

          <PageLink>
            <Link
              to="cults"
              smooth={true}
              duration={500}
              // offset={-20}
            >
              CULTOS
            </Link>
          </PageLink>

          <PageLink>
            <Link
              to="missionaryGroups"
              smooth={true}
              duration={500}
              // offset={-20}
            >
              GRUPOS MISSIONÁRIOS
            </Link>
          </PageLink>
        </ContainerRigth>
      </Container>
    </>
  )
}
