import { ImageProps } from './general-types';

export interface HeroProps {
    title: string;
	image: ImageProps;
	ctaText: string;
	description: string;
}

export interface StyledContainerProps {
    height?: number;
    [cssKey: string]: any;
  };

