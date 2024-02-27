import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
    outline: none;
 }

body {
  -webkit-font-smoothing: antialiased; // Deixa a fonte sem o serrilhamento na borda
}

  &::-webkit-scrollbar {
    width: 10px;
  }
  /* &::-webkit-scrollbar-button {
    width: 10px;
    border-radius: 0 0 2px 2px;
    background: #ff0023;
  } */
  &::-webkit-scrollbar-track {

    background-color: transparent;
  }
  /* &::-webkit-scrollbar-track-piece {
    width: 100px;
    border-radius: 30px;
    background: #ff0023;
  } */
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: ${theme.colors.dimgray};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.dimgray70};
  }

  &::-webkit-scrollbar-thumb:active {
    background: ${theme.colors.dimgray90};
  }
  /* &::-webkit-scrollbar-corner {
    width: 100px;
    color: #ff0023;
  } */
  /* &::-webkit-resizer {
    width: 100px;
    background: #ff0023;
  } */
`
