import { imgProps } from './general-types';

export interface HeroProps {
    title: string;
	img: imgProps;
	ctaText: string;
	description: string;
    href: string;
}

export interface StyledContainerInterface {
    height?: number;
    [cssKey: string]: any;
  };

