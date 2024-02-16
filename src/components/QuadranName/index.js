import React from 'react'

import logoQuadrangular from '../../assets/logo_quadrangular_branca.svg'
import { Container, Img, Paragraph } from './style'

export function QuadranName() {
  return (
    <>
      <Container id="quadranName">
        <Img src={logoQuadrangular} alt="logo-quadrangular" />
        <Paragraph>IGREJA DO EVANGELHO QUADRANGULAR OURO BRANCO</Paragraph>
      </Container>
    </>
  )
}
