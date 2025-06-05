import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(-10px, -10px); }
  100% { transform: translate(0, 0); }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(circle at 20% 40%, #00ffe030 5%, transparent 60%),
    radial-gradient(circle at 70% 60%, #ff00ff20 0%, transparent 60%), #0a0a0a;
  pointer-events: none;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  top: 30%;
  left: 50%;
  background: #ff00ff30;
  filter: blur(120px);
  animation: ${move} 12s ease-in-out infinite;
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
      <FadeTop />
      <FadeBottom />
    </BackgroundWrapper>
  );
}
