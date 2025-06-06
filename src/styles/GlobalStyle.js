import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NyghtSerif";
    src: url("/src/fonts/NyghtSerif-Light.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    scroll-behavior: smooth;
    transition: background-color 0.3s ease, color 0.3s ease;

    ${({ theme }) =>
      theme.name === "dark" &&
      `
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
    `}
  }
`;
