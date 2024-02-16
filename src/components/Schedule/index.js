import React from 'react'

import logoSchedule from '../../assets/agenda.svg'
import { Container, Img, ContainerDates, ContainerImgDate } from './style'

export function Schedule() {
  return (
    <>
      <Container id="schedule">
        <Img src={logoSchedule} alt="eventos" />
        <ContainerDates>
          <ContainerImgDate>
            <p>Segunda - reunião de diaconato às 19:30</p>
            <p>Terça - Culto de homens e mulheres às 19:30</p>
            <p>Quarta - Culto às 19:30</p>
            <p>Sexta - Culto de libertação às 19:30</p>
            <p>
              Sábado - Culto de crianças às 9:30 / Culto de adolescentes às
              17:30 / Culto de jovens às 19:00
            </p>
            <p>Domingo - EBD às 8:30 / Culto às 19:30</p>
          </ContainerImgDate>
        </ContainerDates>
      </Container>
    </>
  )
}
