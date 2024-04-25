import { FC, HTMLAttributes } from 'react';
import { StyledSectionTinyHeading } from './elements';

export const SectionTinyHeading: FC<HTMLAttributes<HTMLHeadingElement>> = ({ ...props }) => {
  return <StyledSectionTinyHeading {...props} />;
};