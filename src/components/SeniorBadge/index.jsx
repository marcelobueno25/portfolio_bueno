import styled from "styled-components";

const SeniorBadge = styled.span`
  background: linear-gradient(135deg, #00ffe0, #00ffe0);
  color: #000;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.3rem 2rem;
  border-radius: 12px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 255, 224, 0.4);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(0, 255, 224, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 255, 224, 0);
    }
  }
`;

export default SeniorBadge;
