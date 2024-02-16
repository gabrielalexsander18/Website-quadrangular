import React from 'react'

import MissionaryGroupsImg from '../../assets/grupos_missionarios.svg'
import { Container, Img, Paragraph, Button } from './style'

export function MissionaryGroups() {
  return (
    <>
      <Container id="missionaryGroups">
        <Img src={MissionaryGroupsImg} alt="logo-quadrangular" />
        <Paragraph>
          As principais tarefas dos grupos missionários da quadrangular incluem
          a realização de cultos evangelísticos nas casas dos membros, em
          espaços abertos e na igreja; mobilizar todo o grupo para o
          evangelismo; promover estudos bíblicos; realizar trabalhos sociais; e
          encorajar a prática da oração e do jejum.
        </Paragraph>
        <Button>Saiba mais</Button>
      </Container>
    </>
  )
}
