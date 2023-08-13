import { CardContentBar } from '@/components/molecules/CardContent/CardContentBar';
import { CardContentText } from '@/components/molecules/CardContent/CardContentText';
import { CardHeader } from '@/components/molecules/CardHeader/CardHeader';
import { CardContainer } from '@/components/organisms/Card/Card.styles';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import theme from '@/styles/theme';

interface ActivityCardProps {
  data: {
    cnt: number;
    cntPercent: number;
    yesterdayCntPercent: number;
    activityHour: number;
    activityMinute: number;
    activityPercent: number;
    yesterdayActivityPercent: number;
  };
}

const ActivityCard = ({ data }: ActivityCardProps) => {
  const currentTheme = categoryToColorMap['Activity'];
  const color = theme.color[currentTheme];

  return (
    <CardContainer $borderColor={color}>
      <CardHeader
        text="놀이 통계"
        imgSrc={require(`@/assets/images/img-activity.png`)}
      />
      <CardContentText type="횟수" data={data.cnt} unit="회" />
      <CardContentBar
        $borderColor={color}
        $ratio={data.cntPercent}
        $yesterDayRatio={data.yesterdayCntPercent}
      />

      <CardContentText
        type="시간"
        data={data.activityHour}
        unit="시간"
        data2={data.activityMinute}
        unit2="분"
      />
      <CardContentBar
        $borderColor={color}
        $ratio={data.activityPercent}
        $yesterDayRatio={data.yesterdayActivityPercent}
      />
    </CardContainer>
  );
};

export { ActivityCard };
