import { styled } from 'styled-components';

export const ToDayWaterListStyle = styled.div`
  width: 280px;
  padding: 24px 8px;
  background-color: #ecf2ff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(64, 123, 255, 0.3);
  * {
    margin: 0;
    padding: 0;
    display: block;
  }

  /* Кастомізація скролу */
  .todayList::-webkit-scrollbar {
    width: 4px; /* Ширина скролу */
  }

  .todayList::-webkit-scrollbar-thumb {
    background-color: #9ebbff; /* Колір скролу */
    border-radius: 8px; /* Закруглення країв */
  }

  .todayList::-webkit-scrollbar-track {
    background-color: #d7e3ff; /* Колір фону за скролом */
    border-radius: 8px; /*Закруглення країв*/
  }

  .todayList {
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

  .monthContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  .pagination {
    display: flex;
    align-items: center;
    column-gap: 20px;

    p {
      color: #407bff;
    }
  }
  .arrow {
    fill: #407bff;
    background-color: transparent;
  }

  .monthList {
    display: flex;
    flex-wrap: wrap;
    column-gap: 26px;
    row-gap: 16px;
  }
  .monthListItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .day {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #fff;
    font-weight: 400;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-bottom: 4px;
    font-size: 14px;
    transition: border 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    line-height: calc(18 / 14);
  }
  .day:hover {
    border: 1px solid #ff9d43;
  }
  .percent {
    font-size: 10px;
    line-height: 16px;
    color: #9ebbff;
  }

  @media screen and (min-width: 768px) {
    width: 656px;

    .todayList {
      row-gap: 14px;
    }
    .monthList {
      column-gap: 34px;
      row-gap: 20px;
    }
    .day {
      font-size: 16px;
      line-height: calc(20 / 16);
    }
    .percent {
      font-size: 13px;
      line-height: calc(20 / 13);
    }
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
    .monthList {
      column-gap: 22px;
    }
    .percent {
      font-size: 12px;
      line-height: calc(18 / 13);
    }
  }
`;
