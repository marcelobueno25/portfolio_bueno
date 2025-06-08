import styled from "styled-components";

const BackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(circle at 20% 40%, #00ffe030 5%, transparent 60%),
    radial-gradient(circle at 70% 60%, #ff00ff20 0%, transparent 60%),
    ${({ theme }) => theme.colors.background}; // <- Aqui vem do tema
  pointer-events: none;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: #ff00ff30;
  filter: blur(120px);
  border-radius: 50%;

  animation: float1 14s ease-in-out infinite;
  top: 20%;
  left: 25%;

  @keyframes float1 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(40px, -30px);
    }
    50% {
      transform: translate(0, -60px);
    }
    75% {
      transform: translate(-30px, -30px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const Glow2 = styled(Glow)`
  background: #00ffe030;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 60%;
  animation: float2 18s ease-in-out infinite;

  @keyframes float2 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(-30px, 30px);
    }
    50% {
      transform: translate(-60px, 0);
    }
    75% {
      transform: translate(-30px, -30px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const FadeTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background} 0%,
    transparent 100%
  );
`;

const FadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.background} 0%,
    transparent 100%
  );
`;

export default function BackgroundEffect() {
  return (
    <BackgroundWrapper>
      <Glow />
      <Glow2 />
      <FadeTop />
      <FadeBottom />
    </BackgroundWrapper>
  );
}
