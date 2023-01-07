import { InputHTMLAttributes } from "react";

export type TextFieldProps = {
  label: string,
  hasError?: boolean,
} & InputHTMLAttributes<HTMLInputElement>;




