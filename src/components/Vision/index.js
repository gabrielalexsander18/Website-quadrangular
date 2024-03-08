import React from 'react'

import Simbolos from '../../assets/simbolos_doutrina_quadrangular.svg'
import logoVision from '../../assets/visao.svg'
import {
  Container,
  Img,
  ImgSimbolos,
  ContainerBotton,
  ContainerRight
} from './style'

export function Vision() {
  return (
    <>
      <Container id="vision">
        <Img src={logoVision} alt="visao" />
        <h5>
          Baseada inteiramente na Bíblia, mais especificamente na passagem
          através da visão de Ezequiel (Ezequiel 1). Somos uma das igrejas
          pentecostais pioneiras do avivamento carismático do início do século
          XX.
        </h5>
        <ContainerBotton>
          <ImgSimbolos src={Simbolos} />
          <ContainerRight>
            <p>Doutrina da Salvação, poder para Salvar</p>
            <p>
              Doutrina do Batismo com o Espírito Santo, poder para Batizar com
              fogo
            </p>
            <p>Doutrina da Cura divina, poder para Curar</p>
            <p>Doutrina da Segunda vinda, poder para em brave Voltar</p>
          </ContainerRight>
        </ContainerBotton>
      </Container>
    </>
  )
}
