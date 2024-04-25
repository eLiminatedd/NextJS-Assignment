import { FC, HTMLAttributes } from 'react';
import { StyledSectionHeading } from './elements';

export const SectionHeading: FC<HTMLAttributes<HTMLHeadingElement>> = ({ ...props }) => {
  return <StyledSectionHeading {...props} />;
};