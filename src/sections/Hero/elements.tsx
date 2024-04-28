'use client';
import styled from 'styled-components';
import { StyledSectionContainer } from '@/components/Containers/SectionContainer/elements';
import { StyledSectionBigHeading } from '@/components/Typography/elements';
import { SectionSubheading } from '@/components/Typography/SectionSubheading';
import { HTMLAttributes } from 'react';
import { StyledButton } from '@/components/Button/elements';

import { StyledContainerProps } from '@/type/hero-types';
import { ButtonStyle } from '@/type/button-types';


export const StyledContainer = styled(({ height, ...props }: StyledContainerProps) => <StyledSectionContainer {...props} />)`
  align-items: center;
`;

export const StyledGetStartedBtn = styled((props: ButtonStyle) => <StyledButton {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props: HTMLAttributes<HTMLHeadingElement>) => <StyledSectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props: HTMLAttributes<HTMLHeadingElement>) => <SectionSubheading {...props} />)`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled((props: HTMLAttributes<HTMLDivElement>) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled((props: HTMLAttributes<HTMLDivElement>) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled((props: HTMLAttributes<HTMLDivElement>) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;