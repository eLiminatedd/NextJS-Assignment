import styled from 'styled-components';
import {SectionStyle} from '@/type/section-types';


export const StyledSectionContainer = styled.div<SectionStyle>`
  display: flex;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;
