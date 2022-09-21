import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align  : center;
    border-top: 0.2rem solid ${theme.colors.mediumGray};
  
  span{
    color: ${theme.colors.secondaryColor};
  }
  a {
      color: ${theme.colors.primaryColor};
      text-decoration: none;
    }

    &  ${TextComponent} {
      font-size: ${theme.fonts.sizes.small};
    }
    &  ${SectionContainer} {
     padding-top: 0;
     padding-bottom: 0;
    }
  `}
`;
