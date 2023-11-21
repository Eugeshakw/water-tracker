import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import theme from '../../CommonStyle/theme';

export const RouterLink = styled(Link)`
  position: relative;
  font-size: 16px;
  line-height: calc(20 / 16);
  color: #407bff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap:8px;
  &:hover {
    color: #ff9d43;
    transition: color 0.4s ease;
  }
`;

export const HeaderIcon = styled.div`
  width: 28px !important;
  height: 28px !important;
  svg {
    margin-left: 8px;
    width: 28px;
    height: 28px;
    fill: #ffffff;
    stroke: #2f2f2f;
  }
`;
