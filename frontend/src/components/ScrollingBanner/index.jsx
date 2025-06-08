import { Fragment } from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const ContainerBanner = styled.div`
  width: 100%;
  overflow-x: clip;
  height: 80px;
`;

const BannerWrapper = styled.div`
  transform: rotate(-3deg);
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Track = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 40s linear infinite;
`;

const LoopContent = styled.div`
  display: flex;
`;

const Item = styled.span`
  flex: none;
  padding: 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const Dot = styled.span`
  margin: 0 1.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
`;

export function ScrollingBanner() {
  const tags = [
    "Frontend",
    "Backend",
    "JavaScript",
    "UI/UX",
    "React",
    "IA",
    "TypeScript",
    "Next",
    "Tailwind",
    "Sass",
    "Express",
    "MongoDB",
    "REST APIs",
    "Web Development",
    "Node.js",
    "CSS",
    "HMTL",
    "Angular",
    ".NET",
    "Vue",
    "Python",
  ];

  return (
    <ContainerBanner>
      <BannerWrapper>
        <Track>
          {[0, 1].map((loop) => (
            <LoopContent key={loop}>
              {tags.map((tag, i) => (
                <Fragment key={`${loop}-${i}`}>
                  <Item>{tag}</Item>
                  {(i < tags.length - 1 || loop === 0) && <Dot>•</Dot>}
                </Fragment>
              ))}
            </LoopContent>
          ))}
        </Track>
      </BannerWrapper>
    </ContainerBanner>
  );
}
