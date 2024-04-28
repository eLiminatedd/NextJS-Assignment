import { ButtonHTMLAttributes, ReactNode } from 'react';
import { theme } from '@/styles';

export interface ButtonStyleInterface {
    color?: string;
    variant?: string,
    [props: string]: any
}

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    [props: string]: any;
}

export interface VariousBtns extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: keyof typeof theme;
    variant?: 'outlined' | 'contained' | 'text';
  }