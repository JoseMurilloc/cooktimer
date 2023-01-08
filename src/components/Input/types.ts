import { InputHTMLAttributes } from "react";

export type TextFieldProps = {
  label: string,
  registerName: string, 
  hasError?: boolean,
} & InputHTMLAttributes<HTMLInputElement>;




