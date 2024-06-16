import { ButtonHTMLAttributes, ReactNode } from "react";

export interface PrivateRouterProps {
  children: ReactNode;
}

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  xtraStyle?: string;
  isOutline?: boolean;
  showLoader?: boolean;
  isDeleteBtn?: boolean;
}
