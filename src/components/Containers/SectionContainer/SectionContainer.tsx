import { FC, HTMLAttributes } from 'react';
import { StyledSectionContainer } from './elements';


export const SectionContainer: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return <StyledSectionContainer {...props} />;
};