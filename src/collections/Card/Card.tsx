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

/**
 * Represents a card component that displays an image, heading, and description.
 * @param {Object} props - The props object containing the card data.
 * @param {Object} props.img - The image object containing source, alt text, width, and height.
 * @param {string} props.img.src - The URL of the image.
 * @param {string} props.img.alt - The alternative text for the image.
 * @param {number} props.img.width - The width of the image.
 * @param {number} props.img.height - The height of the image.
 * @param {string} props.heading - The heading text of the card.
 * @param {string} props.text - The description text of the card. Supports HTML.
 * @param {string} props.backgroundColor - The background color of the card.
 * @param {string} props.width - The width of the card.
 * @returns {JSX.Element} JSX representation of the card component.
 */

export const Card: FC<CardInterface> = ({
  img,
  heading,
  text,
  backgroundColor,
  width,
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
