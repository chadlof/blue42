import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    font-family: Montserrat;
  }
#root {
  display: block;
  margin: 0;

}
   body html {
    display:flex;
    margin: 0;
  }
  `
