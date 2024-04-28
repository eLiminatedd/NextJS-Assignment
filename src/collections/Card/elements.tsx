// Styled elements for the Card go here
import styled from 'styled-components';
import { HTMLAttributes } from 'react';
import {CardWrapInterface} from '@/type/card-types';

/**
 * Styled component for the container of the card image.
 * @param {Object} props - Props object containing HTML attributes.
 * @returns {JSX.Element} JSX representation of the CardImageCont styled component.
 */

export const CardImageCont = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 25%;
  height: 75%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

/**
 * Styled component for the container of the card.
 * @param {Object} props - Props object containing CardWrapInterface properties.
 * @param {number} props.width - The width of the card.
 * @param {string} props.$backgroundColor - The background color of the card.
 * @returns {JSX.Element} JSX representation of the CardWrapCont styled component.
 */

export const CardWrapCont = styled.div<CardWrapInterface>`
  display: flex;
  width: ${(props) => props.width + 'px'};
  background-color: ${(props) => props.$backgroundColor};
  min-height: 8.25rem;
  border-radius: 15px;
  border: 2px solid transparent;
  align-items: center;
  &:hover {
    color: #006efd;
    cursor: pointer;
    border: 2px solid #006EFD;
  };
`;

/**
 * Styled component for the header of the card.
 * @param {Object} props - Props object containing HTML attributes.
 * @returns {JSX.Element} JSX representation of the CardHeader styled component.
 */

export const CardHeader = styled.div<HTMLAttributes<HTMLDivElement>>`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
  ${CardWrapCont}:hover & {
    text-decoration: underline;
  }
`;

/**
 * Styled component for the description of the card.
 * @param {Object} props - Props object containing HTML attributes.
 * @returns {JSX.Element} JSX representation of the CardDescription styled component.
 */

export const CardDescription = styled.div<HTMLAttributes<HTMLDivElement>>`
  color: black;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 200;
`;

/**
 * Styled component for the container of the text content of the card.
 * @param {Object} props - Props object containing HTML attributes.
 * @returns {JSX.Element} JSX representation of the CardTextCont styled component.
 */

export const CardTextCont = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
  margin-right: 0px
  width: 75%;
`;