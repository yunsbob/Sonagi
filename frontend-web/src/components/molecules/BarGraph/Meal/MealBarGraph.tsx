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

  return (
    <MealBarGraphContainer>
      <MealBarGraphLineContainer>{lines}</MealBarGraphLineContainer>
      <MealBarGraphBarContainer>
        <MealBarGraphWrapper $barHeight={70}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={60}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={90}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={50}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={80}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={90}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
        <MealBarGraphWrapper $barHeight={30}>
          <MealBar height={50} color={theme.color.graphFeeding} />
          <MealBar height={50} color={theme.color.graphInfantFormula} />
          <MealBar height={50} color={theme.color.graphBreastFeeding} />
          <MealBar height={50} color={theme.color.graphBabyFood} />
          <MealBar height={50} color={theme.color.graphSnack} />
          <MealBar height={50} color={theme.color.graphMilk} />
        </MealBarGraphWrapper>
      </MealBarGraphBarContainer>
      <MealBarGraphDateContainer>
        <Text size="xSmall">7월 9일</Text>
        <Text size="xSmall">7월 10일</Text>
        <Text size="xSmall">7월 11일</Text>
        <Text size="xSmall">7월 12일</Text>
        <Text size="xSmall">7월 13일</Text>
        <Text size="xSmall">7월 14일</Text>
        <Text size="xSmall">7월 15일</Text>
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
