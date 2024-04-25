import { FC, HTMLAttributes } from 'react';
import { StyledSectionBigHeading } from './elements';

export const SectionBigHeading: FC<HTMLAttributes<HTMLHeadingElement>> = ({ ...props }) => {
  return <StyledSectionBigHeading {...props} />;
};