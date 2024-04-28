'use client';
import styled from 'styled-components';
import {
  StyledSectionHeading,
  StyledSectionParagraph,
} from '@/components/Typography/elements';
import { SectionSubheading } from '@/components/Typography/SectionSubheading';
import { HTMLAttributes } from 'react';
import { MainWrapContainerInterface } from '@/type/main-types';

/**
 * Styled component for text displayed on mobile devices.
 * @returns {JSX.Element} JSX representation of the MobileText styled component.
 */

export const MobileText = styled((props: HTMLAttributes<HTMLParagraphElement>) => (<StyledSectionParagraph {...props} />  ))`
  color: #e74c5b;
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

/**
 * Styled component for the container wrapping the main content.
 * @param {Object} props - Props object containing MainWrapContainerInterface properties.
 * @param {Object} props.$bgImg - The background image object containing source, size, position, and positionMobile.
 * @param {string} props.$bgImg.src - The URL of the background image.
 * @param {string} props.$bgImg.size - The size of the background image.
 * @param {string} props.$bgImg.position - The position of the background image.
 * @param {string} props.$bgImg.positionMobile - The position of the background image on mobile devices.
 * @returns {JSX.Element} JSX representation of the MainWrapContainer styled component.
 */

export const MainWrapContainer = styled.div<MainWrapContainerInterface>`
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  background-image: url(${(props) => props.$bgImg.src});
  background-size: ${(props) => props.$bgImg.size};
  background-position: ${(props) => props.$bgImg.position};
  background-repeat: no-repeat;
  background-attachment: scroll;

  @media screen and (max-width: 1024px) {
    background-position: ${(props) => props.$bgImg.positionMobile};
  }
`;

/**
 * Styled component for the container of headings.
 * @returns {JSX.Element} JSX representation of the HeadingCont styled component.
 */

export const HeadingCont = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: black;
`;

/**
 * Styled component for the main heading.
 * @param {Object} props - Props object containing HTML attributes.
 * @returns {JSX.Element} JSX representation of the StyledMainHeading styled component.
 */

export const StyledMainHeading = styled(  (props: HTMLAttributes<HTMLHeadingElement>) => (    <StyledSectionHeading {...props} />  ))`
  margin: 0;
`;

/**
 * Styled component for the subheading.
 * @param {Object} props - Props object containing HTML attributes.
 * @returns {JSX.Element} JSX representation of the StyledSubHeading styled component.
 */

export const StyledSubHeading = styled(  (props: HTMLAttributes<HTMLHeadingElement>) => (    <SectionSubheading {...props} />  ))`
  margin: 0;
  font-weight: 400;
  line-height: 0.5rem;
`;

/**
 * Styled component for the container of cards.
 * @returns {JSX.Element} JSX representation of the CardsWrapper styled component.
 */

export const CardsWrapper = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    position: relative;
  }
`;

/**
 * Styled component for the container of images.
 * @returns {JSX.Element} JSX representation of the ImageCont styled component.
 */

export const ImageCont = styled.div<HTMLAttributes<HTMLDivElement>>`
  height: 100%;
  display: flex;
  justify-content: center;
`;

/**
 * Styled component for the container of content.
 * @returns {JSX.Element} JSX representation of the ContentContainer styled component.
 */

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
