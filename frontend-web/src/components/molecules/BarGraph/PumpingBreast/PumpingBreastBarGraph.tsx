import { Text } from '@/components/atoms/Text/Text.styles';
import {
  PumpingBreastBarGraphContainer,
  PumpingBreastBarGraphLineContainer,
  PumpingBreastBarGraphLine,
  PumpingBreastBarGraphBarContainer,
  PumpingBreastBarGraphWrapper,
  PumpingBreastBar,
  PumpingBreastBarGraphTime,
  // PumpingBreastBarGraphLineAndText,
  PumpingBreastBarGraphDateContainer,
  PumpingBreastBarGraphCategoryContainer,
  PumpingBreastBarGraphCategoryWrapper,
  PumpingBreastBarGraphCategoryCircle,
} from '@/components/molecules/BarGraph/PumpingBreast/PumpingBreastBarGraph.styles';
import theme from '@/styles/theme';

const PumpingBreastBarGraph = () => {
  // 10개의 line
  // let lines: JSX.Element[] = [];

  // for (let i = 0; i < 9; i++) {
  //   lines = [...lines, <PumpingBreastBarGraphLine key={i} />];
  // }

  const lineLen = 9;
  const percent100 = (100 - 100 / lineLen) / 100;

  const times = [0, 3, 9, 12, 15, 18, 21, 24];

  return (
    <PumpingBreastBarGraphContainer>
      <PumpingBreastBarGraphBarContainer>
        <PumpingBreastBarGraphWrapper $barHeight={percent100 * 70}>
          <PumpingBreastBar
            height={50}
            color={theme.color.graphAmountsOfPumpingBreast}
          />
        </PumpingBreastBarGraphWrapper>
        <PumpingBreastBarGraphWrapper $barHeight={percent100 * 60}>
          <PumpingBreastBar
            height={90}
            color={theme.color.graphAmountsOfPumpingBreast}
          />
        </PumpingBreastBarGraphWrapper>
        <PumpingBreastBarGraphWrapper $barHeight={percent100 * 100}>
          <PumpingBreastBar
            height={20}
            color={theme.color.graphAmountsOfPumpingBreast}
          />
        </PumpingBreastBarGraphWrapper>
        <PumpingBreastBarGraphWrapper $barHeight={percent100 * 50}>
          <PumpingBreastBar
            height={70}
            color={theme.color.graphAmountsOfPumpingBreast}
          />
        </PumpingBreastBarGraphWrapper>
        <PumpingBreastBarGraphWrapper $barHeight={percent100 * 80}>
          <PumpingBreastBar
            height={100}
            color={theme.color.graphAmountsOfPumpingBreast}
          />
        </PumpingBreastBarGraphWrapper>
        <PumpingBreastBarGraphWrapper $barHeight={percent100 * 90}>
          <PumpingBreastBar
            height={30}
            color={theme.color.graphAmountsOfPumpingBreast}
          />
        </PumpingBreastBarGraphWrapper>
        <PumpingBreastBarGraphWrapper $barHeight={percent100 * 30}>
          <PumpingBreastBar
            height={80}
            color={theme.color.graphAmountsOfPumpingBreast}
          />
        </PumpingBreastBarGraphWrapper>
      </PumpingBreastBarGraphBarContainer>
      <PumpingBreastBarGraphDateContainer>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/26
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/27
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/28
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/29
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/30
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/31
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          1/1
        </Text>
      </PumpingBreastBarGraphDateContainer>
      <PumpingBreastBarGraphCategoryContainer>
        <PumpingBreastBarGraphCategoryWrapper>
          <PumpingBreastBarGraphCategoryCircle
            $bgColor={theme.color.white1}
            $borderColor={theme.color.graphCountsOfPumpingBreast}
          />
          <Text size="xSmall">횟수</Text>
        </PumpingBreastBarGraphCategoryWrapper>
        <PumpingBreastBarGraphCategoryWrapper>
          <PumpingBreastBarGraphCategoryCircle
            $bgColor={theme.color.graphAmountsOfPumpingBreast}
          />
          <Text size="xSmall">용량</Text>
        </PumpingBreastBarGraphCategoryWrapper>
      </PumpingBreastBarGraphCategoryContainer>
    </PumpingBreastBarGraphContainer>
  );
};

export { PumpingBreastBarGraph };
