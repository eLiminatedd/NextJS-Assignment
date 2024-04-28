// The Card to be exported goes here

import Image from 'next/image';
import { FC } from 'react';
import {
  CardContainer,
  CardHeader,
  CardImageCont,
  CardInnerText,
  CardTextCont,
} from './elements';


interface CardContPropsType {
    backgroundColor: string,
    width: number,
    img: { src: string, alt: string, width: number, height: number },
    heading: string,
    text: string,
  }

export const Card: FC<CardContPropsType> = ({ img, heading, text, backgroundColor, width, ...props } ) => {
  return (
    <>
      <CardContainer backgroundColor={backgroundColor} width={width}>
        <CardImageCont>
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          ></Image>
        </CardImageCont>
        <CardTextCont>
          <CardHeader>{heading}</CardHeader>
          <CardInnerText
            dangerouslySetInnerHTML={{ __html: text }}
          ></CardInnerText>
        </CardTextCont>
      </CardContainer>
    </>
  );
};
