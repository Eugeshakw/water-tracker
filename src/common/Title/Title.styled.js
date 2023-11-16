import theme from 'common/GlobalStyle/Theme.jsx';
import styled from 'styled-components';


export const Title = styled.h2`
  font-size: ${theme.fontSizes.large};
  line-height: calc(32 / 26);
  font-weight: 500;
  color: ${theme.colors.primaryDark};
  padding: 0;
  margin: 0;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  line-height: calc(42 / 36);
  font-weight: 700;
  color: ${theme.colors.primaryDark};
  padding: 0;
  margin-bottom: 16px;

  @media only screen and (max-width: 768px) {
    font-size: ${theme.fontSizes.large};
  }
`;

export const SubTitle = styled.h3`
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;
  line-height: calc(20 / 18);

  margin-bottom: 12px;
`;