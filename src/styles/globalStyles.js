import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
    outline: none;
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
    border: 2px solid #005F73;
    background: #696969;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(105,105,105, .7);
    border: 1px solid rgba(0,95,115, .7);
  }

  &::-webkit-scrollbar-thumb:active {
    background: rgba(105,105,105, .9);
    border: 1.5px solid rgba(0,95,115, .9);

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
