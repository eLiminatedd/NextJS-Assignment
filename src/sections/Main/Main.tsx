'use client';
import {
  MainWrapContainer,
  StyledMainHeading,
  StyledSubHeading,
  ImageCont,
  ContentContainer,
  HeadingCont,
  CardsWrapper,
  MobileText,
} from './elements';
import Image from 'next/image';
import { FC } from 'react';
import { Card } from '@/collections/Card/';
import { MainComponentInterface } from '@/type/main-types';
import { CardInterface } from '@/type/card-types';

/**
 * Represents the Main component, which contains the main content of a page.
 * @param {Object} props - The props object containing the main component data.
 * @param {Object} props.bgImg - The background image object containing source, alt text, width, and height.
 * @param {string} props.bgImg.src - The URL of the background image.
 * @param {string} props.bgImg.alt - The alternative text for the background image.
 * @param {number} props.bgImg.width - The width of the background image.
 * @param {number} props.bgImg.height - The height of the background image.
 * @param {Array.<CardInterface>} props.cardsProps - An array of card data objects.
 * @param {Object} props.agencyImg - The agency image object containing source, alt text, width, and height.
 * @param {string} props.agencyImg.src - The URL of the agency image.
 * @param {string} props.agencyImg.alt - The alternative text for the agency image.
 * @param {number} props.agencyImg.width - The width of the agency image.
 * @param {number} props.agencyImg.height - The height of the agency image.
 * @param {Object} props.headingText - The object containing main heading and subtitle text.
 * @param {string} props.headingText.title - The main heading title.
 * @param {string} props.headingText.subtitle - The subtitle text.
 * @param {string} props.mobileMessage - The message for mobile devices.
 * @returns {JSX.Element} JSX representation of the Main component.
 */

export const Main: FC<MainComponentInterface> = ({
  bgImg,
  cardsProps,
  agencyImg,
  headingText,
  ...props
}) => {
  return (
    <MainWrapContainer $bgImg={bgImg}>
      <HeadingCont>
        <StyledMainHeading>{headingText.title}</StyledMainHeading>
        <StyledSubHeading>{headingText.subtitle}</StyledSubHeading>
      </HeadingCont>
      <ContentContainer>
        <ImageCont>
          <Image
            src={agencyImg.src}
            alt={agencyImg.alt}
            width={agencyImg.width}
            height={agencyImg.height}
          ></Image>
        </ImageCont>
        <CardsWrapper>
          <MobileText>{props.mobileMessage}</MobileText>
          {cardsProps.map((card: CardInterface, i: number) => (
            <Card key={i} {...card} />
          ))}
        </CardsWrapper>
      </ContentContainer>
    </MainWrapContainer>
  );
};
