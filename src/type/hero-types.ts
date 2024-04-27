import { imgProps } from './general-types';

export interface HeroProps {
    title: string;
	img: imgProps;
	ctaText: string;
	description: string;
}

export interface StyledContainerProps {
    height?: number;
    [cssKey: string]: any;
  };

