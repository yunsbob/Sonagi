import { styled } from 'styled-components';
import theme from './../../../styles/theme';

const WeekendCalendarContainer = styled.div`
  display: flex;
  background-color: ${() => theme.color.white1};
  box-sizing: border-box;
  padding: 10px;
  justify-content: space-around;
`;

export default WeekendCalendarContainer;
