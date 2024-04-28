import { CardInterface } from '@/type/card-types';
import Image from 'next/image';
import { FC } from 'react';
import {
  CardWrapCont,
  CardHeader,
  CardImageCont,
  CardDescription,
  CardTextCont,
} from './elements';

export const Card: FC<CardInterface> = ({
  img,
  heading,
  text,
  backgroundColor,
  width,
  ...props
  // props important for font!
}) => {
  return (
    <CardWrapCont $backgroundColor={backgroundColor} width={width}>
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
        <CardDescription
          dangerouslySetInnerHTML={{ __html: text }}
        ></CardDescription>
      </CardTextCont>
    </CardWrapCont>
  );
};
