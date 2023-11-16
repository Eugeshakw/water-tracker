import { styled } from 'styled-components';

export const LogoModal = styled.div`
  width: 118px;
  height: 88px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  ul {
    list-style-type: none; /* Зняття маркерів */
    padding: 0; /* Зняття відступів */
    margin: 0;

    display: inline-flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    background-color: white;
    border: none;
    cursor: pointer;
    color: #407bff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  svg {
    margin-right: 8px;
  }
`;