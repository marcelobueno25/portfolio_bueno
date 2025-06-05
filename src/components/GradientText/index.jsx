import styled from "styled-components";

const GradientText = styled.span`
  background: linear-gradient(270deg, #00ffe0, #ff00ff, #00ffe0);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 40s ease infinite;
  font-family: "NyghtSerif", serif;

  font-size: 3.5rem; /* tamanho base para desktop */
  font-weight: bold;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Responsivo */
  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export default GradientText;
