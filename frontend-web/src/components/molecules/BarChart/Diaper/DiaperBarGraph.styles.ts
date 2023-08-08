import { styled } from 'styled-components';

interface DiaperBarGraphStyleProps {
  $barHeight: number;
}

const Container = styled.div`
  width: 90vw;
  height: 50vh;
  margin: 30px auto 60px;
  position: relative;
`;

const LineContainer = styled.div`
  display: flex;
  height: inherit;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Time = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.color.gray4};
  /* color: ${({ theme }) => theme.color.gray4}; */
  width: calc(100% - 20px);

  height: 0.1px;
`;

const BarContainer = styled.div`
  width: inherit;
  padding: 0px 20px 0px 40px;
  height: calc(100% - 7.5px);
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: absolute;
  bottom: calc(100% / 9 + 3px);
`;

const Wrapper = styled.div<DiaperBarGraphStyleProps>`
  width: 33px;
  height: ${props => `${props.$barHeight}%`};
  display: flex;
  flex-direction: column-reverse;
`;

const DiaperBar = styled.div<{ height: number; color: string }>`
  height: ${props => `${props.height}%`};
  background-color: ${props => props.color};
  border-radius: 4px;
`;

const DateContainer = styled.div`
  width: 100%;
  padding: 0px 20px 0px 40px;
  height: calc(100% / 9 + 5px);
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  float: right;
  width: calc(66px + ((100% - (33px * 7)) / 6));
  justify-content: space-between;
  margin-right: 20px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  width: fit-content;
  margin-top: 10px;

  > div {
    margin-right: 6px;
  }
`;

const CategoryCircle = styled.div<{ $bgColor: string }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${props => props.$bgColor};
`;

export {
  Container,
  LineContainer,
  Time,
  Line,
  BarContainer,
  Wrapper,
  DiaperBar,
  DateContainer,
  CategoryContainer,
  CategoryWrapper,
  CategoryCircle,
};
