import { StyledButton, StyledButtonText } from './elements';
import { ButtonInterface } from '@/type/button-types';
import { FC } from 'react';


export const Button: FC<ButtonInterface> = ({ children, ...props }) => {
  return (
    <StyledButton {...props as any}>
        <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};
