import React from 'react'

import logoSchedule from '../../assets/agenda.svg'
import imgDateSchedule from '../../assets/dates_agenda.svg'
import {
  Container,
  Img,
  ContainerDates,
  ImageDates,
  ContainerImgDate
} from './style'

export function Schedule() {
  return (
    <>
      <Container>
        <Img src={logoSchedule} alt="eventos" />
        <ContainerDates>
          <ContainerImgDate>
            <ImageDates src={imgDateSchedule} />
          </ContainerImgDate>
        </ContainerDates>
      </Container>
    </>
  )
}
