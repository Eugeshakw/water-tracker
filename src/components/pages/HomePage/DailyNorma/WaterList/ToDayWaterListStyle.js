import { styled } from 'styled-components';

export const ToDayWaterListStyle = styled.div`
  width: 264px;
  /* height: 258px; */
  background-color: #ecf2ff;
  * {
    margin: 0;
    padding: 0;
    display: block;
  }

  /* Кастомізація скролу */
  ul::-webkit-scrollbar {
    width: 4px; /* Ширина скролу */
  }

  ul::-webkit-scrollbar-thumb {
    background-color: #9ebbff; /* Колір скролу */
    border-radius: 8px; /* Закруглення країв */
  }

  ul::-webkit-scrollbar-track {
    background-color: #d7e3ff; /* Колір фону за скролом */
    border-radius: 8px; /*Закруглення країв*/
  }

  ul {
    max-height: 212px;
    margin-top: 16px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    .consumeWater {
      position: relative;
      display: flex;
      justify-content: center;
      padding: 12px 8px;
      align-items: center;

      .textWrapper {
        display: flex;
        align-items: center;
        column-gap: 12px;

        p {
          span {
            color: #407bff;
            font-size: 18px;
          }
          font-size: 14px;
        }
      }

      .iconWrapper {
        display: flex;
        column-gap: 18px;
        margin-left: auto;

        button {
          background-color: transparent;
        }
      }
    }

    .consumeWater:after {
      content: '';
      border: 1px solid #d7e3ff;
      width: 95%;
      position: absolute;
      bottom: -13px;
    }
    .addWater {
      color: #407bff;
      font-weight: 500;
      background-color: transparent;
      margin-top: 12px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 656px;

    ul {
      row-gap: 14px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
   
  }
`;
