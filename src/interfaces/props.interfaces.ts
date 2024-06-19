import { ButtonHTMLAttributes, ReactNode } from "react";

export interface PrivateRouterProps {
  children: ReactNode;
}

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  xtraStyle?: string;
  isOutline?: boolean;
  showLoader?: boolean;
  isDeleteBtn?: boolean;
}

export interface Props {
  show: boolean;
}

export interface BackDropProps {
  show: boolean;
  exit: number;
}

export interface PaginationProps {
  maxNumOfPages: number;
  currentPageNum: number;
  increasePageNum: () => void;
  decreasePageNum: () => void;
}

export interface LayoutProps {
  title: string;
  children: ReactNode;
}

export interface DropdownModalProps {
  arrayLen: number;
  index: number;
}

export interface OptionModalProps {
  arrayLen: number;
  index: number;
}
