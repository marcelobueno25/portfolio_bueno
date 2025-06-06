import styled from "styled-components";

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  border: 2px solid #fff;
  background: transparent;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  &:hover {
    background: #fff;
    color: #0a0a0a;
  }
`;

export default DownloadButton;
