import { Text } from '@/components/atoms/Text/Text.styles';
import {
  Container,
  LineContainer,
  Line,
  BarContainer,
  Wrapper,
  Bar,
  DateContainer,
  CategoryContainer,
  CategoryWrapper,
  CategoryCircle,
} from '@/components/molecules/BarChart/Meal/MealBarGraph.styles';
import theme from '@/styles/theme';

const MealBarGraph = () => {
  // 10개의 line
  let lines: JSX.Element[] = [];

  for (let i = 0; i < 11; i++) {
    lines = [...lines, <Line key={i} />];
  }

  const lineLen = 10;
  const percent100 = (100 - 100 / lineLen) / 100;

  return (
    <Container>
      <LineContainer>{lines}</LineContainer>
      <BarContainer>
        <Wrapper $barHeight={percent100 * 70}>
          <Bar height={50} color={theme.color.graphFeeding} />
          <Bar height={50} color={theme.color.graphInfantFormula} />
          <Bar height={50} color={theme.color.graphBreastFeeding} />
          <Bar height={50} color={theme.color.graphBabyFood} />
          <Bar height={50} color={theme.color.graphSnack} />
          <Bar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 60}>
          <Bar height={50} color={theme.color.graphFeeding} />
          <Bar height={50} color={theme.color.graphInfantFormula} />
          <Bar height={50} color={theme.color.graphBreastFeeding} />
          <Bar height={50} color={theme.color.graphBabyFood} />
          <Bar height={50} color={theme.color.graphSnack} />
          <Bar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 90}>
          <Bar height={50} color={theme.color.graphFeeding} />
          <Bar height={50} color={theme.color.graphInfantFormula} />
          <Bar height={50} color={theme.color.graphBreastFeeding} />
          <Bar height={50} color={theme.color.graphBabyFood} />
          <Bar height={50} color={theme.color.graphSnack} />
          <Bar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 50}>
          <Bar height={50} color={theme.color.graphFeeding} />
          <Bar height={50} color={theme.color.graphInfantFormula} />
          <Bar height={50} color={theme.color.graphBreastFeeding} />
          <Bar height={50} color={theme.color.graphBabyFood} />
          <Bar height={50} color={theme.color.graphSnack} />
          <Bar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 80}>
          <Bar height={50} color={theme.color.graphFeeding} />
          <Bar height={50} color={theme.color.graphInfantFormula} />
          <Bar height={50} color={theme.color.graphBreastFeeding} />
          <Bar height={50} color={theme.color.graphBabyFood} />
          <Bar height={50} color={theme.color.graphSnack} />
          <Bar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 100}>
          <Bar height={50} color={theme.color.graphFeeding} />
          <Bar height={50} color={theme.color.graphInfantFormula} />
          <Bar height={50} color={theme.color.graphBreastFeeding} />
          <Bar height={50} color={theme.color.graphBabyFood} />
          <Bar height={50} color={theme.color.graphSnack} />
          <Bar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 30}>
          <Bar height={50} color={theme.color.graphFeeding} />
          <Bar height={50} color={theme.color.graphInfantFormula} />
          <Bar height={50} color={theme.color.graphBreastFeeding} />
          <Bar height={50} color={theme.color.graphBabyFood} />
          <Bar height={50} color={theme.color.graphSnack} />
          <Bar height={50} color={theme.color.graphMilk} />
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
          <CategoryCircle $bgColor={theme.color.graphFeeding} />
          <Text size="xSmall">수유</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphInfantFormula} />
          <Text size="xSmall">분유</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphBreastFeeding} />
          <Text size="xSmall">유축 수유</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphBabyFood} />
          <Text size="xSmall">이유식</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphSnack} />
          <Text size="xSmall">간식</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphMilk} />
          <Text size="xSmall">우유</Text>
        </CategoryWrapper>
      </CategoryContainer>
    </Container>
  );
};

export { MealBarGraph };
