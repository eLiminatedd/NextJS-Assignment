// Styled elements for the Card go here
import styled from 'styled-components';
import { HTMLAttributes } from 'react';
import {CardWrapInterface} from '@/type/card-types';

export const CardImageCont = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 25%;
  height: 75%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const CardWrapCont = styled.div<CardWrapInterface>`
  display: flex;
  width: ${(props) => props.width + 'px'};
  background-color: ${(props) => props.$backgroundColor};
  min-height: 8.25rem;
  border-radius: 15px;
  border: 2px solid transparent;
  align-items: center;
  &:hover {
    color: #006efd;
    cursor: pointer;
    border: 2px solid #006EFD;
  };
`;

export const CardHeader = styled.div<HTMLAttributes<HTMLDivElement>>`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
  ${CardWrapCont}:hover & {
    text-decoration: underline;
  }
`;

export const CardDescription = styled.div<HTMLAttributes<HTMLDivElement>>`
  color: black;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 200;
`;

export const CardTextCont = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
  margin-right: 0px
  width: 75%;
`;