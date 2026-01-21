import Image from "next/image";
import styled from "styled-components";

export const AvatarContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 580px) {
    span {
      display: none;
    }
  }
`;

export const AvatarTextStyle = styled.span`
  font-size: 0.8rem;
  color: #ffffff;
  font-weight: 600;
`;

export const AvatarStyle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AvatarImageStyle = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const AvatarSkeletonContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const AvatarTextSkeletonStyle = styled.div`
  width: 4rem;
  height: 0.8rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const AvatarImageSkeletonStyle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
