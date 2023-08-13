import { CardContentBar } from '@/components/molecules/CardContent/CardContentBar';
import { CardContentText } from '@/components/molecules/CardContent/CardContentText';
import { CardHeader } from '@/components/molecules/CardHeader/CardHeader';
import { CardContainer } from '@/components/organisms/Card/Card.styles';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import theme from '@/styles/theme';

interface PumpCardProps {
  data: {
    cnt: number;
    cntPercent: number;
    yesterdayCntPercent: number;
    amount: number;
    amountPercent: number;
    yesterdayAmountPercent: number;
  };
}

const PumpCard = ({ data }: PumpCardProps) => {
  const currentTheme = categoryToColorMap['Pump'];
  const color = theme.color[currentTheme];

  return (
    <CardContainer $borderColor={color}>
      <CardHeader
        text="유축 통계"
        imgSrc={require(`@/assets/images/img-pump.png`)}
      />
      <CardContentText type="횟수" data={data.cnt} unit="회" />
      <CardContentBar
        $borderColor={color}
        $ratio={data.cntPercent}
        $yesterDayRatio={data.yesterdayCntPercent}
      />

      <CardContentText type="용량" data={data.amount} unit="회" />
      <CardContentBar
        $borderColor={color}
        $ratio={data.amountPercent}
        $yesterDayRatio={data.yesterdayAmountPercent}
      />
    </CardContainer>
  );
};

export { PumpCard };
