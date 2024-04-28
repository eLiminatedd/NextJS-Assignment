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
