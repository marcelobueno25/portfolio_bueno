import GradientText from "@/components/GradientText";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes, css } from "styled-components";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaTerminal,
  FaCode,
} from "react-icons/fa";

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

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -60%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const IntroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  font-size: 3vw;
  font-weight: bold;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  transition: opacity 0.5s ease;
  font-family: "Playwrite NO", cursive;
  animation: ${fadeInUp} 1.2s ease-out;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* duas por linha */
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ animate, index }) =>
    animate &&
    css`
      animation: ${slideDown} ${ANIMATION_DURATION}ms ease-in forwards;
      animation-delay: ${index * 150}ms;
    `}
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  opacity: 0.05;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const icons = [
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaTerminal,
  FaCode,
];

export default function Intro() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [hideAll, setHideAll] = useState(false);
  const { t } = useTranslation();

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
        {t('welcome')}
        <br />
        <GradientText fontSize="5rem">{t('portfolio')}</GradientText>
      </IntroText>
      <BackgroundBlock>
        {Array.from({ length: NUM_COLUMNS }).map((_, colIndex) => (
          <Block key={colIndex} index={colIndex} animate={startAnimation}>
            {Array.from({ length: 40 }).map((_, i) => {
              const Icon = icons[(colIndex * 40 + i) % icons.length];
              return (
                <IconWrapper key={i}>
                  <Icon />
                </IconWrapper>
              );
            })}
          </Block>
        ))}
      </BackgroundBlock>
    </IntroWrapper>
  );
}
