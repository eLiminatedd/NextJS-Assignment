import { ButtonHTMLAttributes, ReactNode } from 'react';
import { theme } from '@/styles';

export interface ButtonStyle {
    color?: string;
    variant?: string,
    [props: string]: any
}

export interface ButtonIntrface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    props: any;
}

export interface VariousBtns extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: keyof typeof theme;
    variant?: 'outlined' | 'contained' | 'text';
  }