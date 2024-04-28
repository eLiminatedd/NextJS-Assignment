// Styled elements for the Card go here
import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export const CardImageCont = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} />
))`
  width: 25%;
  height: 75%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

interface CardContProps {
  backgroundColor: string;
  width: number;
}

export const CardContainer = styled.div<CardContProps>`
  display: flex;
  align-items: center;
  /* width: 100%; */
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  min-height: 7rem;
  border-radius: 10px;
  border: 3px solid transparent;
  &:hover {
    border: 3px solid #006efd;
    color: #006efd;
    cursor: pointer;
  };
`;

// export const CardContainer = styled((props: HTMLAttributes<HTMLDivElement>) => (  <div style={props.backgroundColor} {...props} />))`
//   display: flex;
//   align-items: center;
//   /* width: 100%; */
//   width: `${width}px`
//   background-color: `${backgroundColor}`;
//   min-height: 7rem;
//   border-radius: 10px;
//   border: 3px solid transparent;
//   &:hover {
//     border: 3px solid #006efd;
//     color: #006efd;
//     cursor: pointer;
//   }
//`;

export const CardHeader = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <h1 {...props} />
))`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0;
  ${CardContainer}:hover & {
    text-decoration: underline;
  }
`;

export const CardInnerText = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <p {...props} />
))`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: black;
  margin-top: 5px;
`;

export const CardTextCont = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
  width: 75%;
`;
