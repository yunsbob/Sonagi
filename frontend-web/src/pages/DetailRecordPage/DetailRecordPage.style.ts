import styled from 'styled-components';
import theme from '@/styles/theme';

export const DetailRecordPageContainer = styled.div`
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailRecordPageWrapper = styled.div`
  margin-top: 80px;
  padding: 0px 40px;
  width: 100vw;
  /* height: 0vh; */
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
