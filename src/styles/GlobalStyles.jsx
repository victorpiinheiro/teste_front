import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
   
  }

  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    font-family: 'Roboto', 'Poppins', sans-serif;
    background: #f9fbff;
  }
`

