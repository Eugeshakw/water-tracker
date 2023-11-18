import { styled } from 'styled-components';

export const HeaderStyle = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 8px 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 16px 32px 0px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 12px 18px 0px 18px;
  }

  div {
    width: 102px;
    height: 48px;
    display: flex;
    align-items: center;
  }
  p {
    width: 58px;
    height: 28px;
    margin: 0px 0px 0px 4px;
    color: var(--primery-color-blue, #407bff);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;
