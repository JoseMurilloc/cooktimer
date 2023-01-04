import React, { ButtonHTMLAttributes } from "react"

export type ButtonProps = {
  children: React.ReactNode,
  layout?: 'outline' | 'solid',
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;