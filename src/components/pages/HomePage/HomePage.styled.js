import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
    gap: 12px;
  }
`;

export const Container = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContentWrapper = styled.div`
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const NormaContainer = styled.div`
  display: flex;

  flex-direction: column;
  margin-bottom: 42px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 6px 76px;
  border-radius: 10px;
  background-color: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.3;
    padding: 10px 104px;
    margin: 0;
    margin-left: 12px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 30px;
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;
