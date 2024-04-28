'use client';
import Image from 'next/image';
import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
} from './elements';
import { FC } from 'react';
import { HeroProps } from '@/type/hero-types';
import { useRouter } from 'next/navigation';

export const Hero: FC<HeroProps> = ({ img, title, description, ctaText, ...props }) => {
  const router = useRouter();

  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledCTAContainer>
          <StyledGetStartedBtn onClick={() => router.push('/agency')}>{ctaText}</StyledGetStartedBtn>
        </StyledCTAContainer>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image layout="responsive" src={img.src} alt={img.alt} width={img.width} height={img.height} />
      </StyledImageContainer>
    </StyledContainer>
  );
};