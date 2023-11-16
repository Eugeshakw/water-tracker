import theme from 'common/GlobalStyle/Theme.jsx';

import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;

export const FormLabel = styled.label`
  font-size: 18px;
  line-height: calc(24 / 18);
  color: ${theme.colors.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const InputError = styled.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${theme.colors.secondaryRed};
`;

