import React from 'react'

import MissionOurImg from '../../assets/nossa_missao.svg'
import {
  Container,
  ContainerLeft,
  ContainerRed,
  ContainerYellow,
  ContainerBlue,
  ContainerPurple,
  ContainerRight,
  MissionOur,
  ContainerP,
  Caption,
  Paragraph
} from './style'

export function OurMission() {
  return (
    <>
      <Container id="ourMission">
        <ContainerLeft>
          <ContainerRed></ContainerRed>
          <ContainerYellow></ContainerYellow>
          <ContainerBlue></ContainerBlue>
          <ContainerPurple></ContainerPurple>
        </ContainerLeft>

        <ContainerRight>
          <MissionOur src={MissionOurImg} alt="logo-nossa-missao" />
          <ContainerP>
            <Caption>
              Missão e visão da Igreja do Evangelho Quadrangular:
            </Caption>
            <Paragraph>
              A Igreja do Evangelho Quadrangular existe para glorificar o nome
              de Deus e promover o crescimento do Seu reino na terra. O
              mandamento de Jesus Cristo é levar o evangelho e fazer discípulos
              em todas as nações (Marcos, 16:15; Mateus, 28:19). Por isso, a
              Igreja Quadrangular dedica-se à causa do evangelismo
              interdenominacional e mundial, o que expressa o seu espírito e
              foco.
            </Paragraph>
            <Caption>Visão:</Caption>
            <Paragraph>
              A visão da Igreja do Evangelho Quadrangular é apresentar Jesus
              Cristo, o filho de Deus, como o Salvador, o Batizador com o
              Espírito Santo, o Médico dos médicos e o Rei que há de vir. Desde
              a sua fundação, em 1923, essa visão foi praticada por meio da
              evangelização e das assembléias locais, nos Estados Unidos e no
              exterior. Isso consolidou a formação de líderes cristãos para o
              aprendizado e conhecimento bíblico, a fim de se tornarem o “sal”
              da terra e a “luz” do mundo.
            </Paragraph>
          </ContainerP>
        </ContainerRight>
      </Container>
    </>
  )
}
