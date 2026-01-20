import styled from "styled-components";

export const InputContainerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

type InputProps = {
  isError?: boolean;
};

export const InputStyle = styled.input<InputProps>`
  width: 100%;
  min-width: 25rem;
  height: 2.5rem;
  background-color: #ffffff;
  border: 0.1rem solid #000000;
  padding: 0.5rem;
  color: #000000;
  outline: none;

  ::placeholder {
    color: #dedede;
  }

  ${({ isError }) =>
    isError &&
    `
    border-color: #ff0000;
  `}
`;

export const InputErrorStyle = styled.span`
  font-size: 0.8rem;
  color: #ff0000;
`;
