import { styled } from 'styled-components';
import theme from '../../../styles/theme';

interface TokenWrapperProps {
  statusOfDay: 'beforeToday' | 'isToday' | 'afterToday';
}

export const TokenWrapper = styled.div<TokenWrapperProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  background-color: ${({ statusOfDay }) =>
    statusOfDay === 'isToday' ? theme.color.calendarTodayBg : undefined};
  border-radius: 12px;
  padding: 16px 8px 16px 8px;
  box-sizing: border-box;
  min-width: 14%;
`;

export const floatingPoint = styled.div`
  position: absolute;
  font-weight: 900;
  font-size: 30px;
  top: -10%;
  left: 30%;
  transform: translate(-5%, 10%);
`;
