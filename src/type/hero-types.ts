import { imgProps } from './general-types';

/**
 * Interface defining the properties for a hero component.
 * @interface HeroProps
 * @property {string} title - The title of the hero section.
 * @property {imgProps} img - The image properties for the hero section.
 * @property {string} ctaText - The call-to-action text.
 * @property {string} description - The description text for the hero section.
 * @property {string} href - The URL for the link associated with the hero section.
 */

export interface HeroProps {
    title: string;
	img: imgProps;
	ctaText: string;
	description: string;
    href: string;
}

/**
 * Interface defining the properties for styling the container.
 * @interface StyledContainerInterface
 * @property {number} [height] - The height of the container.
 * @property {any} [cssKey] - Additional CSS properties for styling the container.
 */

export interface StyledContainerInterface {
    height?: number;
    [cssKey: string]: any;
  };

