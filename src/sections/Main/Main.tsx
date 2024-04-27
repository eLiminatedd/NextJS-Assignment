import { StyledMainHeading, StyledSubHeading, ImageCont } from './elements';
import Image from 'next/image';
import { FC } from 'react';

const title = 'Managed agency selection';
const subtitle = 'Strenghten your onboarding process';



export const Main: FC<any> = ({img, ...props}) => {
  return (
    <>
      <div>
        <StyledMainHeading>{title}</StyledMainHeading>
        <StyledSubHeading>{subtitle}</StyledSubHeading>
      </div>
      <div>
            <ImageCont>
                <Image src={img.src} alt={img.alt} width={img.width} height={img.height}></Image>
            </ImageCont>
      </div>
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
