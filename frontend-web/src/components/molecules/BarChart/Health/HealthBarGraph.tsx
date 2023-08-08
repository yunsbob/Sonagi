import { Text } from '@/components/atoms/Text/Text.styles';
import {
  Container,
  LineContainer,
  LineWrapper,
  Line,
  BarContainer,
  Wrapper,
  HealthBar,
  DateContainer,
  CategoryContainer,
  CategoryWrapper,
  CategoryCircle,
} from '@/components/molecules/BarChart/Health/HealthBarGraph.styles';
import theme from '@/styles/theme';

const HealthBarGraph = () => {
  // 10개의 line
  // let lines: JSX.Element[] = [];

  // for (let i = 0; i < 9; i++) {
  //   lines = [...lines, <Line key={i} />];
  // }

  const lineLen = 9;
  const percent100 = (100 - 100 / lineLen) / 100;

  // const times = [0, 3, 9, 12, 15, 18, 21, 24];

  // 최대 횟수에 따라 선의 개수가 달라짐
  const maxCnt = 8;

  return (
    <Container>
      <LineContainer>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            4
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            3
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            2
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            1
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            0
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}></Text>
          <Line />
        </LineWrapper>
      </LineContainer>

      <BarContainer>
        <Wrapper $barHeight={percent100 * 70}>
          <HealthBar height={50} color={theme.color.graphFeeding} />
          <HealthBar height={50} color={theme.color.graphInfantFormula} />
          <HealthBar height={50} color={theme.color.graphBreastFeeding} />
          <HealthBar height={50} color={theme.color.graphBabyFood} />
          <HealthBar height={50} color={theme.color.graphSnack} />
          <HealthBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 60}>
          <HealthBar height={50} color={theme.color.graphFeeding} />
          <HealthBar height={50} color={theme.color.graphInfantFormula} />
          <HealthBar height={50} color={theme.color.graphBreastFeeding} />
          <HealthBar height={50} color={theme.color.graphBabyFood} />
          <HealthBar height={50} color={theme.color.graphSnack} />
          <HealthBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 100}>
          <HealthBar height={50} color={theme.color.graphFeeding} />
          <HealthBar height={50} color={theme.color.graphInfantFormula} />
          <HealthBar height={50} color={theme.color.graphBreastFeeding} />
          <HealthBar height={50} color={theme.color.graphBabyFood} />
          <HealthBar height={50} color={theme.color.graphSnack} />
          <HealthBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 50}>
          <HealthBar height={50} color={theme.color.graphFeeding} />
          <HealthBar height={50} color={theme.color.graphInfantFormula} />
          <HealthBar height={50} color={theme.color.graphBreastFeeding} />
          <HealthBar height={50} color={theme.color.graphBabyFood} />
          <HealthBar height={50} color={theme.color.graphSnack} />
          <HealthBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 80}>
          <HealthBar height={50} color={theme.color.graphFeeding} />
          <HealthBar height={50} color={theme.color.graphInfantFormula} />
          <HealthBar height={50} color={theme.color.graphBreastFeeding} />
          <HealthBar height={50} color={theme.color.graphBabyFood} />
          <HealthBar height={50} color={theme.color.graphSnack} />
          <HealthBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 90}>
          <HealthBar height={50} color={theme.color.graphFeeding} />
          <HealthBar height={50} color={theme.color.graphInfantFormula} />
          <HealthBar height={50} color={theme.color.graphBreastFeeding} />
          <HealthBar height={50} color={theme.color.graphBabyFood} />
          <HealthBar height={50} color={theme.color.graphSnack} />
          <HealthBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 30}>
          <HealthBar height={50} color={theme.color.graphFeeding} />
          <HealthBar height={50} color={theme.color.graphInfantFormula} />
          <HealthBar height={50} color={theme.color.graphBreastFeeding} />
          <HealthBar height={50} color={theme.color.graphBabyFood} />
          <HealthBar height={50} color={theme.color.graphSnack} />
          <HealthBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
      </BarContainer>
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
          <CategoryCircle $bgColor={theme.color.graphPoop} />
          <Text size="xSmall">대변</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphPee} />
          <Text size="xSmall">소변</Text>
        </CategoryWrapper>
      </CategoryContainer>
    </Container>
  );
};

export { HealthBarGraph };
