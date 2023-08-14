import { CardContentBar } from '@/components/molecules/CardContent/CardContentBar';
import { CardContentText } from '@/components/molecules/CardContent/CardContentText';
import { CardHeader } from '@/components/molecules/CardHeader/CardHeader';
import { CardContainer } from '@/components/organisms/Card/Card.styles';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import theme from '@/styles/theme';

interface SleepCardProps {
  data: {
    cnt: number;
    cntPercent: number;
    yesterdayCntPercent: number;
    sleepHour: number;
    sleepMinute: number;
    sleepPercent: number;
    yesterdaySleepPercent: number;
  };
}

const SleepCard = ({ data }: SleepCardProps) => {
  const currentTheme = categoryToColorMap['Sleep'];
  const color = theme.color[currentTheme];
  const darkColor = theme.color.cardSleep1;
  const lightColor = theme.color.cardSleep2;

  return (
    <CardContainer $borderColor={color}>
      <CardHeader
        text="수면 통계"
        imgSrc={require(`@/assets/images/img-sleep.png`)}
      />
      <CardContentText type="횟수" data={data.cnt} unit="회" />
      <CardContentBar
        $borderColor={
          data.cntPercent > data.yesterdayCntPercent ? darkColor : lightColor
        }
        $ratio={data.cntPercent}
        $yesterDayRatio={data.yesterdayCntPercent}
      />

      <CardContentText
        type="시간"
        data={data.sleepHour}
        unit="시간"
        data2={data.sleepMinute}
        unit2="분"
      />
      <CardContentBar
        $borderColor={
          data.sleepPercent > data.yesterdaySleepPercent
            ? darkColor
            : lightColor
        }
        $ratio={data.sleepPercent}
        $yesterDayRatio={data.yesterdaySleepPercent}
      />
    </CardContainer>
  );
};

export { SleepCard };
