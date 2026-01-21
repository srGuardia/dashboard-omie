"use client";

import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { InputContainerStyle, InputErrorStyle, InputStyle } from "./styles";

interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  error?: string;
}

export const Input = ({ error, ...props }: InputProps) => {
  return (
    <InputContainerStyle>
      <InputStyle {...props} data-error={!!error} />

      {error && <InputErrorStyle>{error}</InputErrorStyle>}
    </InputContainerStyle>
  );
};
