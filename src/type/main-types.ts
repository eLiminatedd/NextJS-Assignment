import {CardInterface} from '@/type/card-types';

/**
 * Interface defining the properties for the background image.
 * @interface BgImageInterface
 * @property {string} src - The URL of the background image.
 * @property {string} size - The size of the background image.
 * @property {string} position - The position of the background image.
 * @property {string} positionMobile - The position of the background image on mobile devices.
 */

export interface BgImageInterface {
    src: string,
    size: string,
    position: string,
    positionMobile: string,
}

/**
 * Interface defining the properties for the agency image.
 * @interface agencyImgInterface
 * @property {string} src - The URL of the agency image.
 * @property {string} alt - The alternative text for the agency image.
 * @property {number} width - The width of the agency image.
 * @property {number} height - The height of the agency image.
 */

export interface agencyImgInterface {
    src: string,
    alt: string,
    width: number,
    height: number,
}

/**
 * Interface defining the properties for the main wrap container.
 * @interface MainWrapContainerInterface
 * @property {BgImageInterface} $bgImg - The background image properties.
 */

export interface MainWrapContainerInterface {
    $bgImg: BgImageInterface;
}

/**
 * Interface defining the properties for the heading text.
 * @interface HeadingTextInterface
 * @property {string} title - The title text.
 * @property {string} subtitle - The subtitle text.
 */

export interface HeadingTextInterface {
    title: string,
    subtitle: string,
}

/**
 * Interface defining the properties for the main component.
 * @interface MainComponentInterface
 * @property {agencyImgInterface} agencyImg - The properties for the agency image.
 * @property {BgImageInterface} bgImg - The background image properties.
 * @property {CardInterface[]} cardsProps - An array of card data objects.
 * @property {HeadingTextInterface} headingText - The properties for the heading text.
 * @property {string} mobileMessage - The message for mobile devices.
 */

export interface MainComponentInterface {
    agencyImg:agencyImgInterface
    bgImg: BgImageInterface,
    cardsProps: CardInterface[],
    headingText: HeadingTextInterface
    mobileMessage: string;
}
