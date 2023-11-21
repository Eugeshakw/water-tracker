import { styled } from 'styled-components';

export const HeaderStyle = styled.header`
  width: 280px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1216px;
  }

  `;
export const ContainerOfLogo = styled.div`

    display:flex;
    align-items:center;
    width: 102px;
    height: 48px;

`;