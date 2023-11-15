import { styled } from 'styled-components';

export const LogoutModal = styled.div`
  width: 232px;
  height: 196px;
  display: inline-flex;
  padding: 32px 24px 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  border-radius: 10px;
  background: #fff;
  position: relative;
  h3 {
    margin: 0px;
    color: #2f2f2f;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
  p {
    margin: 0px;
    height: 32px;
    color: #2f2f2f;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
  }
  button {
    border: none;
  }

  /* Media query для екранів менших за 768px */
  @media (min-width: 768px) {
    width: 544px;
    height: 144px;
    ul {
      width: 100%;
      flex-direction: row-reverse;
      justify-content: flex-start;
    }
  }
  /* Media query для екранів менших за 1440px */
  @media (min-width: 1440px) {
    ul {
      flex-direction: row;
    }
  }
`;

export const LogoutBtn = styled.button`
  width: 232px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--secondary-color-3, #ef5050);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px; /* 125% */
  /* Media query для екранів менших за 768px */
  @media (min-width: 768px) {
    width: 160px;
    height: 44px;
  }
  /* Media query для екранів менших за 1440px */
  @media (min-width: 1440px) {
  }
`;

export const CancellBtn = styled.button`
  width: 232px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--secondary-color-5, #d7e3ff);

  color: var(--primery-color-blue, #407bff);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */

  /* Media query для екранів менших за 768px */
  @media (min-width: 768px) {
    width: 160px;
    height: 44px;
  }
  /* Media query для екранів менших за 1440px */
  @media (min-width: 1440px) {
    color: blue;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  z-index: 1;
  top: 36px;
  right: 24px;
  width: 24px;
  height: 24px;
  background-color: #fff;
`;
