import styled from 'styled-components';
import theme from '@/styles/theme';

export const FeedingPageContainer = styled.div`
  /* width: calc(100% - 20px); */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  background-color: white;
`;

export const FeedingPageWrapper = styled.div`
  height: calc(100vh - 8rem);
  margin-top: 60px;
  padding: 30px 40px;
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  text-align: center;
  font-family: 'Happiness-Sans';
`;

export const Divider = styled.div`
  border-top: 1px solid ${theme.color.gray2};
  padding: 20px 0px;
  width: 70vw;
`;
