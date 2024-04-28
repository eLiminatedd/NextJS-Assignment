import styled, { css } from 'styled-components';
import { SectionInnerHeading } from '@/components';
import { VariousBtns } from '@/type/button-types';

const outlinedVariantButton = css<VariousBtns>`
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme, color = 'main' }) => theme[color]};
  color: ${({ theme, color = 'main' }) => theme[color]};

  &:hover {
    border-color: ${({ theme }) => theme.main};
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.white};
  }
`;

const containedVariantButton = css<VariousBtns>`
  background-color: ${({ theme, color = 'main' }) => theme[color]};

  &:hover {
    background-color: ${({ theme, color = 'main' }) => theme.hover[color]};
  }
`;

const textVariantButton = css<VariousBtns>`
  background-color:transparent;
  border: none;
  border-radius: 0;
  min-width: unset;
  padding: 0 2rem;
  margin: 0 2rem;
  color: ${({ theme, color = 'main' }) => theme[color]};

  &:hover {
    color: ${({ theme }) => theme.black};
    border-bottom: 1px solid ${({ theme }) => theme.black};
  }
`;

const buttonVariants = {
  outlined: outlinedVariantButton,
  contained: containedVariantButton,
  text: textVariantButton,
};

export const StyledButton = styled.button<VariousBtns>`
  font-family: sans-serif;
  overflow: hidden;
  text-align: center;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  min-width: 184px;
  min-height: 56px;
  padding: 16px 0;
  cursor: pointer;
  border: none;
  color: white;
  ${({ variant = 'contained' }) => buttonVariants[variant]}
`;

export const StyledButtonText = styled((props: any) => (
    <SectionInnerHeading {...props} />
))``;
