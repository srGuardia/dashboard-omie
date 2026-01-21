import styled from "styled-components";

export const InputContainerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

type InputProps = {
  "data-error"?: boolean;
};

export const InputStyle = styled.input<InputProps>`
  width: 100%;
  min-width: 25rem;
  height: 2.5rem;
  background-color: #ffffff;
  padding: 0.5rem;
  color: #000000;
  outline: none;

  ::placeholder {
    color: #dedede;
  }

  ${({ ...props }) =>
    props?.["data-error"] &&
    `
      box-shadow: 0 0 0.8rem 0.2rem #ff0000;
  `}

  @media (max-width: 580px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const InputErrorStyle = styled.span`
  font-size: 0.8rem;
  color: #ff0000;
`;
