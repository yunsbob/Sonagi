import styled from 'styled-components';
import theme from '@/styles/theme';

export const SleepPageContainer = styled.div`
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const SleepPageWrapper = styled.div`
  margin-top: 80px;
  padding: 0px 40px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-family: 'Happiness-Sans';
`;

export const Divider = styled.div`
  border-top: 1px solid ${theme.color.gray2};
  padding: 20px 0px;
  width: 70vw;
`;
