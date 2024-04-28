import {CardInterface} from '@/type/card-types';

export interface BgImageInterface {
    src: string,
    size: string,
    position: string,
    positionMobile: string,
}

export interface agencyImgInterface {
    src: string,
    alt: string,
    width: number,
    height: number,
}

export interface MainWrapContainerInterface {
    $bgImg: BgImageInterface;
}

export interface HeadingTextInterface {
    title: string,
    subtitle: string,
}

export interface MainComponentInterface {
    agencyImg:agencyImgInterface
    bgImg: BgImageInterface,
    cardsProps: CardInterface[],
    headingText: HeadingTextInterface
    mobileMessage: string;
}
