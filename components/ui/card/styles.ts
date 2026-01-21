import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const CardStyle = styled.div`
  background: var(--gradient);
  padding: 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  min-height: 10rem;
  width: 100%;
  user-select: none;

  &:hover {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
    scale: 1.02;
  }
`;

export const CardTitleStyle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);
`;

export const CardValueStyle = styled.span`
  font-size: 2.8rem;
  margin-top: 0.8rem;
  display: block;
`;

export const CardUpStyle = styled.span`
  color: #7cfc00;
`;

export const CardDownStyle = styled.span`
  color: #ff0000;
`;

export const CardSkeletonStyle = styled.div`
  background: var(--gradient);
  padding: 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  min-height: 10rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    animation: ${shimmer} 1.5s infinite;
  }
`;

export const CardTitleSkeletonStyle = styled.div`
  height: 2rem;
  width: 60%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.4rem;
  margin-bottom: 0.8rem;
`;

export const CardValueSkeletonStyle = styled.div`
  height: 2.8rem;
  width: 80%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.4rem;
  margin-top: 0.8rem;
`;

export const CardTrendSkeletonStyle = styled.div`
  height: 2rem;
  width: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;
