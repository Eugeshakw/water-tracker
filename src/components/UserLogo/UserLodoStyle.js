import { styled } from 'styled-components';

export const UserIn = styled.div`
  width: 122px;
  height: 28px;
  display: flex;
  align-items: center;
  h2 {
    width: 66px;
    height: 20px;
    margin: 0px 8px 0px 0px;
    display: flex;
    justify-content: flex-end;
    color: #2f2f2f;
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  img {
    width: 28px;
    height: 28px;
    border-radius: 28px;
    margin-right: 4px;
    /* ckground: url(<path-to-image>), lightgray 50% / cover no-repeat; */
  }

  path {
    fillrule: 'evenodd';
    cliprule: 'evenodd';
  }

  /* Стилі для екранів шириною від 321px до 768px */
  @media (min-width: 321px) {
    font-size: 18px;
    line-height: 24px; /* 125% */
  }
  /* Стилі для екранів шириною від 769px до 1440px */
  @media (min-width: 321px) {
  }

  /* Стилі для екранів шириною менше або рівно 320px */
  @media (min-width: 1441px) {
  }
`;
export const UserInBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    background-color: white;
    color: #fff;
    border: none;
    cursor: pointer;
`;