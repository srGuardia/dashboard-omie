"use client";

import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

import { InputContainerStyle, InputErrorStyle, InputStyle } from "./styles";

interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  control?: Control<FieldValues, unknown, FieldValues>;
  name: string;
}

export const Input = ({ name, control, ...props }: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <InputContainerStyle>
          <InputStyle {...field} {...props} isError={!!error} />

          {error && <InputErrorStyle>{error?.message}</InputErrorStyle>}
        </InputContainerStyle>
      )}
    />
  );
};
