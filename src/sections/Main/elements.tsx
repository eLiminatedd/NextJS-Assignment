'use client';
import styled from 'styled-components';
import { StyledSectionHeading, StyledSectionParagraph } from '@/components/Typography/elements';
import { SectionSubheading } from '@/components/Typography/SectionSubheading';
import { HTMLAttributes } from 'react';
import { MainWrapContainerInterface } from '@/type/main-types';

export const MobileText = styled((props: HTMLAttributes<HTMLParagraphElement>) => <StyledSectionParagraph {...props} />)`
  color: #E74C5B;
  font-weight: 700;
  width: 150px;
  position: absolute;
  top: 0.5rem;
  right: -5rem;
  transform: rotate(15deg);
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const MainWrapContainer = styled.div<MainWrapContainerInterface>`
	margin: 4rem auto;
  display: flex;
	flex-direction: column;
	align-items: center;
  gap: 1rem;
  background-image: url(${(props) => props.$bgImg.src});
  background-size: ${(props) => props.$bgImg.size};
  background-position: ${(props) => props.$bgImg.position};
  background-repeat: no-repeat;
  background-attachment: scroll;

  @media screen and (max-width: 1024px) {
    background-position: ${(props) => props.$bgImg.positionMobile};
  }
`;

export const HeadingCont =styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
	flex-direction: column;
	justify-content: center;
  text-align: center;
  color: black;
`;

export const StyledMainHeading = styled((props: HTMLAttributes<HTMLHeadingElement>) => <StyledSectionHeading {...props} />)`
  margin: 0;
`;

export const StyledSubHeading = styled((props: HTMLAttributes<HTMLHeadingElement>) => <SectionSubheading {...props} />)`
  margin: 0;
  font-weight: 400;
  line-height: 0.5rem;
`;

export const CardsWrapper = styled.div<HTMLAttributes<HTMLDivElement>>`
	display: flex;
	flex-direction: column;
	justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    position: relative;
  }
`;

export const ImageCont = styled.div<HTMLAttributes<HTMLDivElement>>`
  height: 100%;
  display: flex;
	justify-content: center;
`;

export const ContentContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
	display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin-top: 2rem;
  align-items: center;
  gap: 4rem;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;