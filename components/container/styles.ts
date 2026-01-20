import styled from "styled-components";

interface ContainerProps {
  collapsed?: boolean;
}

export const ContainerStyle = styled.div<ContainerProps>`
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "sidebar content content";
  grid-template-columns: minmax(12rem, 20rem) repeat(auto-fit, 1fr);
  grid-template-rows: 5rem repeat(2, 1fr);
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
`;
