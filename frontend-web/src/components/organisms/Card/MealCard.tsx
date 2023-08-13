import { CardContentBar } from '@/components/molecules/CardContent/CardContentBar';
import { CardContentText } from '@/components/molecules/CardContent/CardContentText';
import { CardHeader } from '@/components/molecules/CardHeader/CardHeader';
import { CardContainer } from '@/components/organisms/Card/Card.styles';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import theme from '@/styles/theme';

interface MealCardProps {
  data: {
    amount: number;
    amountPercent: number;
    yesterdayCntPercent: number;
    cnt: number;
    cntPercent: number;
    yesterdayAmountPercent: number;
  };
}

const MealCard = ({ data }: MealCardProps) => {
  const currentTheme = categoryToColorMap['Meal'];
  const color = theme.color[currentTheme];

  return (
    <CardContainer $borderColor={color}>
      <CardHeader
        text="식사 통계"
        imgSrc={require(`@/assets/images/img-meal.png`)}
      />
      <CardContentText type="횟수" data={data.cnt} unit="회" />
      <CardContentBar
        $borderColor={color}
        $ratio={data.cntPercent}
        $yesterDayRatio={data.yesterdayCntPercent}
      />

      <CardContentText type="용량" data={data.amount} unit="ml" />
      <CardContentBar
        $borderColor={color}
        $ratio={data.amountPercent}
        $yesterDayRatio={data.yesterdayAmountPercent}
      />
    </CardContainer>
  );
};

export { MealCard };
