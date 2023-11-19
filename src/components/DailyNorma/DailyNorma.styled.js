import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #ecf2ff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  padding: 8px 20px;
  width: 164px;
  p {
    font-size: 18px;
    color: #2f2f2f;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 12px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      color: #407bff;
      font-size: 24px;
      font-weight: 700;
    }
    button {
      background-color: transparent;
      font-size: 16px;
      color: #8baeff;
      line-height: 1.2;
    }
  }
`;
