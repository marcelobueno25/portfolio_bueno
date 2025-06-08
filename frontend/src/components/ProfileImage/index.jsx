import styled, { keyframes } from "styled-components";

const gradientBorder = keyframes`
  0% { border-color: #00ffe0; }
  50% { border-color: #ff00ff; }
  100% { border-color: #00ffe0; }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid;
  animation: ${gradientBorder} 18s linear infinite;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    display: none;
    width: 150px;
    height: 150px;
  }
`;

export default ProfileImage;
