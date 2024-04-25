import { HTMLAttributes, forwardRef } from 'react';
import { StyledSectionSubheading } from './elements';


// eslint-disable-next-line react/display-name
export const SectionSubheading = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ ...props }, ref) => {
  return <StyledSectionSubheading {...props} ref={ref} />;
});