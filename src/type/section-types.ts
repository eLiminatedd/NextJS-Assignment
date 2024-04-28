import { HTMLAttributes } from 'react';

/**
 * Interface defining the style properties for a section.
 * @interface SectionStyle
 * @extends HTMLAttributes<HTMLDivElement>
 * @property {number} [topMargin] - The top margin of the section.
 * @property {number} [bottomMargin] - The bottom margin of the section.
 */

export interface SectionStyle extends HTMLAttributes<HTMLDivElement> {
    topMargin?: number;
    bottomMargin?: number;
  }