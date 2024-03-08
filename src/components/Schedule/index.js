import React from 'react'

import logoSchedule from '../../assets/agenda.svg'
import {
  Container,
  Img,
  ContainerDates,
  ContainerDays,
  ContainerContains
} from './style'

export function Schedule() {
  return (
    <>
      <Container id="schedule">
        <Img src={logoSchedule} alt="eventos" />
        <ContainerDates>
          <ContainerDays>
            <p>Segunda - </p>
            <p>Terça - </p>
            <p>Quarta - </p>
            <p>Sexta - </p>
            <p>Sábado - </p>
            <p>Domingo - </p>
          </ContainerDays>
          <ContainerContains>
            <p>reunião de diaconato às 19:30</p>
            <p>
              Encontro de homens e mulheres quinzenalmente às 19:00 /
              Quadrangular futebol clube quinzenalmente às 19:30
            </p>
            <p>Culto às 19:30</p>
            <p>Culto de libertação às 19:30</p>
            <p>Encontro de jovens e adolescentes quinzenalmente às 19:00</p>
            <p>DBQ às 8:30 / Culto às 19:00 / Igreja kids às 19:00</p>
          </ContainerContains>
        </ContainerDates>
      </Container>
    </>
  )
}
