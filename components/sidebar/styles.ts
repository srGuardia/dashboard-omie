import Link from "next/link";
import styled from "styled-components";

export const SidebarStyle = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: sidebar;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  @media (max-width: 580px) {
    align-items: center;
    flex-direction: row;
  }
`;

type SideBarItemStyleProps = {
  "data-active"?: boolean;
};

export const SideBarItemStyle = styled(Link)<SideBarItemStyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  overflow: hidden;

  ${({ ...props }) =>
    props["data-active"] &&
    `
    background: var(--gradient);
    color: #000000;
    cursor: not-allowed;
  `}

  &:hover {
    background: var(--gradient);
    color: #000000;
  }

  span {
    transition:
      opacity 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    opacity: 1;
    transform: translateX(0);
    display: block;
  }

  @media (max-width: 580px) {
    justify-content: center;
    height: 100%;

    span {
      display: none;
      opacity: 0;
      transform: translateX(-10px);
      width: 0;
      overflow: hidden;
    }
  }
`;
