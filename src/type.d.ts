import { ReactNode } from 'react';

declare module '@material-tailwind/react/components/Button' {
  export interface ButtonProps {
    children: ReactNode;
    color?: string;
    placeholder?: any;
    onPointerEnterCapture?: any;
    onPointerLeaveCapture?: any;
  }
}