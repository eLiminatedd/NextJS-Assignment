import { StyledButton, StyledButtonText } from './elements';
import { ButtonIntrface } from '@/type/button-types';
import { FC } from 'react';

export const Button: FC<ButtonIntrface> = ({ children, ...props }) => {
  return (
    <StyledButton {...props as any}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};
