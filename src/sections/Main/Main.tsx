'use client';
import { StyledMainHeading, StyledSubHeading, ImageCont, ContentContainer } from './elements';
import Image from 'next/image';
import { FC } from 'react';
import { Card } from '@/collections/Card/';

const title = 'Managed agency selection';
const subtitle = 'Strenghten your onboarding process';

export const Main: FC<any> = ({ CardsProps, img, ...props }) => {
  return (
    <>
      <div>
        <StyledMainHeading>{title}</StyledMainHeading>
        <StyledSubHeading>{subtitle}</StyledSubHeading>
      </div>
      <ContentContainer>
        <ImageCont>
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          ></Image>
        </ImageCont>
        <div>
          {CardsProps.map((card: any) => (
            <Card key={card.index} {...card }/>

          ))}
      
        </div>
      </ContentContainer>
    </>
    // <textContainer>
    // 	    Big heading
    // 	    Heading
    // <textContainer>
    // <ContentContainer>
    //  	<StyledImageContainer>
    // 		    Image
    // 	    <StyledImageContainer>
    // 	    CardContainer - cardsData.map(card => (
    // 		    <Card>
    // 			    <StyledImageContainer>
    // 				    Image
    // 			    <StyledImageContainer>
    // 			    <CardText>
    // 				    CardHeading
    // 				    CardDescription
    // 			    <CardText>
    // 		    <Card> )
    // 	    CardContainer
    // <ContentContainer>
  );
};
