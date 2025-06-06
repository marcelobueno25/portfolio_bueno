import GradientText from "@/components/GradientText";
import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const NUM_COLUMNS = 6;
const ANIMATION_DURATION = 1000;
const TEXT_DISPLAY_TIME = 2000;

const slideDown = keyframes`
  to {
    transform: translateY(100vh);
  }
`;

const IntroWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow: hidden;
  pointer-events: none;
`;

const IntroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
  font-family: sans-serif;
  text-align: center;
  font-size: 3vw;
  font-weight: bold;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  transition: opacity 0.5s ease;
  font-family: "Playwrite NO", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 200;
`;

const BackgroundBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Block = styled.div`
  flex: 1;
  background-color: #0f0f0f;
  ${({ animate, index }) =>
    animate &&
    css`
      animation: ${slideDown} ${ANIMATION_DURATION}ms ease-in forwards;
      animation-delay: ${index * 150}ms;
    `}
`;

export default function Intro() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [hideAll, setHideAll] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHideText(true);
      setStartAnimation(true);
    }, TEXT_DISPLAY_TIME);

    const timer2 = setTimeout(() => {
      setHideAll(true);
    }, TEXT_DISPLAY_TIME + NUM_COLUMNS * 150 + ANIMATION_DURATION);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (hideAll) return null;

  return (
    <IntroWrapper>
      <IntroText hide={hideText}>
        Bem vindo, ao meu
        <br />
        <GradientText fontSize="5rem">Portfolio</GradientText>
      </IntroText>
      <BackgroundBlock>
        {Array.from({ length: NUM_COLUMNS }).map((_, index) => (
          <Block key={index} index={index} animate={startAnimation} />
        ))}
      </BackgroundBlock>
    </IntroWrapper>
  );
}
