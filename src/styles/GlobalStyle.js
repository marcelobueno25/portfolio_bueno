import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: #0a0a0a;
    color: ${({ theme }) => theme.colors.textPrimary};
    scroll-behavior: smooth;

    background-image: 
      linear-gradient(135deg, #0a0a0a 25%, transparent 25%),
      linear-gradient(225deg, #0a0a0a 25%, transparent 25%),
      linear-gradient(45deg, #0d0d0d 25%, transparent 25%),
      linear-gradient(315deg, #0d0d0d 25%, #0a0a0a 25%);
    background-position: 
      10px 0, 
      10px 0, 
      0 0, 
      0 0;
    background-size: 20px 20px;
    background-repeat: repeat;
  }
  * {
    box-sizing: border-box;
  }
`;
