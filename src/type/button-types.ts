import { ButtonHTMLAttributes, ReactNode } from 'react';
import { theme } from '@/styles';

/**
 * Interface defining the style properties for a button.
 * @interface ButtonStyleInterface
 * @property {string} [color] - The color of the button.
 * @property {string} [variant] - The variant of the button.
 * @property {any} [props] - Additional properties for the button.
 */

export interface ButtonStyleInterface {
    color?: string;
    variant?: string,
    [props: string]: any
}

/**
 * Interface defining the properties for a button component.
 * @interface ButtonInterface
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 * @property {ReactNode} children - The child elements of the button.
 * @property {any} [props] - Additional properties for the button.
 */

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    [props: string]: any;
}

/**
 * Interface defining various button properties.
 * @interface VariousBtns
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 * @property {keyof typeof theme} [color] - The color of the button, selected from the theme.
 * @property {'outlined' | 'contained' | 'text'} [variant] - The variant of the button.
 */

export interface VariousBtns extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: keyof typeof theme;
    variant?: 'outlined' | 'contained' | 'text';
  }