import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  grid-area: header;
`;

export const LogoStyle = styled.h1`
  background: var(--gradient);
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.1rem;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
