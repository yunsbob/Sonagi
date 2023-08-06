import { Text } from '@/components/atoms/Text/Text.styles';
import {
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
} from '@/components/molecules/BarGraph/Meal/MealBarGraph.styles';
import theme from '@/styles/theme';

const MealBarGraph = () => {
  // 10개의 line
  let lines: JSX.Element[] = [];

  for (let i = 0; i < 11; i++) {
    lines = [...lines, <MealBarGraphLine key={i} />];
  }

  const lineLen = 10;
  const percent100 = (100 - 100 / lineLen) / 100;

  return (
    <MealBarGraphContainer>
      <MealBarGraphLineContainer>{lines}</MealBarGraphLineContainer>
      <MealBarGraphBarContainer>
        <MealBarGraphWrapper $barHeight={percent100 * 70}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={percent100 * 60}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={percent100 * 90}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={percent100 * 50}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={percent100 * 80}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={percent100 * 100}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={percent100 * 30}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
      </MealBarGraphBarContainer>
      <MealBarGraphDateContainer>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/3
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/5
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/10
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          3/9
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
      </MealBarGraphDateContainer>
      <MealBarGraphCategoryContainer>
        <MealBarGraphCategoryWrapper>
          <MealBarGraphCategoryCircle $bgColor={theme.color.graphFeeding} />
          <Text size="xSmall">수유</Text>
        </MealBarGraphCategoryWrapper>
        <MealBarGraphCategoryWrapper>
          <MealBarGraphCategoryCircle
            $bgColor={theme.color.graphInfantFormula}
          />
          <Text size="xSmall">분유</Text>
        </MealBarGraphCategoryWrapper>
        <MealBarGraphCategoryWrapper>
          <MealBarGraphCategoryCircle
            $bgColor={theme.color.graphBreastFeeding}
          />
          <Text size="xSmall">유축 수유</Text>
        </MealBarGraphCategoryWrapper>
        <MealBarGraphCategoryWrapper>
          <MealBarGraphCategoryCircle $bgColor={theme.color.graphBabyFood} />
          <Text size="xSmall">이유식</Text>
        </MealBarGraphCategoryWrapper>
        <MealBarGraphCategoryWrapper>
          <MealBarGraphCategoryCircle $bgColor={theme.color.graphSnack} />
          <Text size="xSmall">간식</Text>
        </MealBarGraphCategoryWrapper>
        <MealBarGraphCategoryWrapper>
          <MealBarGraphCategoryCircle $bgColor={theme.color.graphMilk} />
          <Text size="xSmall">우유</Text>
        </MealBarGraphCategoryWrapper>
      </MealBarGraphCategoryContainer>
    </MealBarGraphContainer>
  );
};

export { MealBarGraph };
