import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: #EFF1E5;
    color: #002F6C;
    display: flex;
    font-family: Montserrat;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  `
