import styled from "styled-components";

export const ContainerStyle = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "sidebar content content";
  grid-template-columns: minmax(12rem, 16rem) repeat(2, 1fr);
  grid-template-rows: 5rem repeat(2, 1fr);
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  transition: grid-template-columns 0.3s ease-in-out;

  @media (max-width: 580px) {
    grid-template-columns: 4rem repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-areas:
      "header"
      "content"
      "sidebar";
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 5rem 1fr 5rem;
  }
`;
