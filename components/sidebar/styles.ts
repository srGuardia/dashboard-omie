import Link from "next/link";
import styled from "styled-components";

export const SidebarStyle = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: sidebar;
`;

type SideBarItemStyleProps = {
  "data-active"?: boolean;
};

export const SideBarItemStyle = styled(Link)<SideBarItemStyleProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  ${({ ...props }) =>
    props["data-active"] &&
    `
    background-color: #f5f5f5;
    color: #000000;
    cursor: not-allowed;
  `}

  &:hover {
    background-color: #f5f5f5;
    color: #000000;
  }
`;
