import { Text } from '@/components/atoms/Text/Text.styles';
import {
  Container,
  BarContainer,
  Wrapper,
  Bar,
  DateContainer,
  CategoryContainer,
  CategoryWrapper,
  CategoryCircle,
  CountContainer,
  CountWrapper,
} from '@/components/molecules/BarChart/PumpingBreast/PumpingBreastBarGraph.styles';
import theme from '@/styles/theme';

const PumpingBreastBarGraph = () => {
  // 10개의 line
  // let lines: JSX.Element[] = [];

  // for (let i = 0; i < 9; i++) {
  //   lines = [...lines, <Line key={i} />];
  // }

  const lineLen = 9;
  const percent100 = (100 - 100 / lineLen) / 100;

  return (
    <Container>
      <BarContainer>
        <Wrapper $barHeight={percent100 * 70}>
          <Bar height={50} color={theme.color.graphAmountsOfPumpingBreast} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 60}>
          <Bar height={90} color={theme.color.graphAmountsOfPumpingBreast} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 100}>
          <Bar height={20} color={theme.color.graphAmountsOfPumpingBreast} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 50}>
          <Bar height={70} color={theme.color.graphAmountsOfPumpingBreast} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 80}>
          <Bar height={100} color={theme.color.graphAmountsOfPumpingBreast} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 90}>
          <Bar height={30} color={theme.color.graphAmountsOfPumpingBreast} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 30}>
          <Bar height={80} color={theme.color.graphAmountsOfPumpingBreast} />
        </Wrapper>
      </BarContainer>
      <CountContainer>
        <CountWrapper>
          <Text size="xSmall">7회</Text>
        </CountWrapper>
        <CountWrapper>
          <Text size="xSmall">7회</Text>
        </CountWrapper>
        <CountWrapper>
          <Text size="xSmall">10회</Text>
        </CountWrapper>
        <CountWrapper>
          <Text size="xSmall">7회</Text>
        </CountWrapper>
        <CountWrapper>
          <Text size="xSmall">7회</Text>
        </CountWrapper>
        <CountWrapper>
          <Text size="xSmall">123회</Text>
        </CountWrapper>
        <CountWrapper>
          <Text size="xSmall">7회</Text>
        </CountWrapper>
      </CountContainer>
      <DateContainer>
        <Text width={35} size="xSmall">
          12/3
        </Text>
        <Text width={35} size="xSmall">
          12/5
        </Text>
        <Text width={35} size="xSmall">
          12/10
        </Text>
        <Text width={35} size="xSmall">
          3/9
        </Text>
        <Text width={35} size="xSmall">
          12/30
        </Text>
        <Text width={35} size="xSmall">
          12/31
        </Text>
        <Text width={35} size="xSmall">
          1/1
        </Text>
      </DateContainer>
      <CategoryContainer>
        <CategoryWrapper>
          <CategoryCircle
            $bgColor={theme.color.white1}
            $borderColor={theme.color.graphCountsOfPumpingBreast}
          />
          <Text size="xSmall">횟수</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphAmountsOfPumpingBreast} />
          <Text size="xSmall">용량</Text>
        </CategoryWrapper>
      </CategoryContainer>
    </Container>
  );
};

export { PumpingBreastBarGraph };
