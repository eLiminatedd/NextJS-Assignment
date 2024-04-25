import { FC, HTMLAttributes } from 'react';
import { StyledSectionInnerHeading } from './elements';

export const SectionInnerHeading: FC<HTMLAttributes<HTMLHeadingElement>> = ({ ...props }) => {
  return <StyledSectionInnerHeading {...props} />;
};