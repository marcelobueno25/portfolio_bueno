import styled from "styled-components";

const GradientText = styled.span`
  display: inline-block;
  background: linear-gradient(270deg, #00ffe0, #ff00ff, #00ffe0);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 40s ease infinite;
  font-family: "Space Grotesk", sans-serif;
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize || "3rem"};
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

  @media (max-width: 768px) {
    font-size: ${({ fontSize }) =>
      fontSize ? `calc(${fontSize} * 0.8)` : "2.5rem"};
  }

  @media (max-width: 480px) {
    font-size: ${({ fontSize }) =>
      fontSize ? `calc(${fontSize} * 0.66)` : "2rem"};
    margin: 10px 0;
  }
`;

export default GradientText;
