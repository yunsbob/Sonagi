import { styled } from 'styled-components';

interface MealBarGraphStyleProps {
  $barHeight: number;
}

const MealBarGraphContainer = styled.div`
  width: 90vw;
  height: 50vh;
  margin: 30px auto 60px;
  position: relative;
`;

const MealBarGraphLineContainer = styled.div`
  display: flex;
  height: inherit;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const MealBarGraphLine = styled.div`
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
`;

const MealBarGraphBarContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: absolute;
  bottom: calc(100% / 10);
`;

const MealBarGraphWrapper = styled.div<MealBarGraphStyleProps>`
  width: 33px;
  height: ${props => `${props.$barHeight}%`};
  display: flex;
  flex-direction: column-reverse;
`;

const MealBar = styled.div<{ height: number; color: string }>`
  height: ${props => `${props.height}%`};
  background-color: ${props => props.color};
  border-radius: 4px;
`;

const MealBarGraphDateContainer = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MealBarGraphCategoryContainer = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
`;

const MealBarGraphCategoryWrapper = styled.div`
  display: flex;
  width: fit-content;
  margin-top: 10px;

  > div {
    margin-right: 6px;
  }
`;

const MealBarGraphCategoryCircle = styled.div<{ $bgColor: string }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${props => props.$bgColor};
`;

export {
  MealBarGraphContainer,
  MealBarGraphLineContainer,
  MealBarGraphLine,
  MealBarGraphBarContainer,
  MealBarGraphWrapper,
  MealBar,
  MealBarGraphDateContainer,
  MealBarGraphCategoryContainer,
  MealBarGraphCategoryWrapper,
  MealBarGraphCategoryCircle,
};
