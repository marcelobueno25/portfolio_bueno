import styled from "styled-components";
import { motion } from "framer-motion";

const StyledIndicator = styled(motion.div)`
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  .mouse {
    width: 24px;
    height: 40px;
    border: 2px solid ${({ theme }) => theme.colors.textPrimary};
    border-radius: 12px;
    position: relative;
  }

  .mouse::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: ${({ theme }) => theme.colors.textPrimary};
    border-radius: 4px;
    animation: wheel 1.5s infinite;
  }

  @keyframes wheel {
    0% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
  }

  .arrows {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    margin-top: 0.3rem;
  }

  .arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.accent};
    animation: blink 1.5s infinite;
  }

  .arrow:nth-child(2) {
    animation-delay: 0.2s;
  }

  .arrow:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes blink {
    0% {
      opacity: 0.3;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      transform: translateY(3px);
    }
    100% {
      opacity: 0.3;
      transform: translateY(0);
    }
  }
`;

const ScrollIndicator = () => {
  return (
    <StyledIndicator>
      <div className="mouse" />
      <div className="arrows">
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
      </div>
    </StyledIndicator>
  );
};

export default ScrollIndicator;
