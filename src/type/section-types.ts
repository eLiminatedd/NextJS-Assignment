import { HTMLAttributes } from 'react';

export interface SectionStyle extends HTMLAttributes<HTMLDivElement> {
    topMargin?: number;
    bottomMargin?: number;
  }