import { styled } from 'styled-components';

interface PumpingBreastBarGraphStyleProps {
  $barHeight: number;
}

const PumpingBreastBarGraphContainer = styled.div`
  width: 90vw;
  height: 50vh;
  margin: 30px auto 30px;
  display: flex;
  flex-direction: column;
`;

const PumpingBreastBarGraphLineContainer = styled.div`
  display: flex;
  height: inherit;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const PumpingBreastBarGraphTime = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PumpingBreastBarGraphLine = styled.div`
  border: 1px solid ${({ theme }) => theme.color.gray4};
  width: calc(100% - 20px);
  height: 0.1px;
`;

const PumpingBreastBarGraphBarContainer = styled.div`
  width: inherit;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  bottom: calc(100% / 9 + 3px);
`;

const PumpingBreastBarGraphWrapper = styled.div<PumpingBreastBarGraphStyleProps>`
  width: 33px;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.gray4};
`;

const PumpingBreastBar = styled.div<{ height: number; color: string }>`
  height: ${props => `${props.height}%`};
  background-color: ${props => props.color};
  border-radius: 4px;
`;

const PumpingBreastBarGraphDateContainer = styled.div`
  width: 100%;
  height: calc(100% / 9);
  margin: 10px 0px;
  border-top: 1px solid ${({ theme }) => theme.color.gray4};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PumpingBreastBarGraphCategoryContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const PumpingBreastBarGraphCategoryWrapper = styled.div`
  display: flex;
  margin-left: 4.5%;

  > div {
    margin-right: 6px;
  }
`;

const PumpingBreastBarGraphCategoryCircle = styled.div<{
  $bgColor: string;
  $borderColor?: string;
}>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${props => props.$bgColor};
  border: ${props =>
    props.$borderColor ? `1px solid ${props.$borderColor}` : 'none'};
`;

export {
  PumpingBreastBarGraphContainer,
  PumpingBreastBarGraphLineContainer,
  PumpingBreastBarGraphTime,
  PumpingBreastBarGraphLine,
  PumpingBreastBarGraphBarContainer,
  PumpingBreastBarGraphWrapper,
  PumpingBreastBar,
  PumpingBreastBarGraphDateContainer,
  PumpingBreastBarGraphCategoryContainer,
  PumpingBreastBarGraphCategoryWrapper,
  PumpingBreastBarGraphCategoryCircle,
};
