import { CardContentBar } from '@/components/molecules/CardContent/CardContentBar';
import { CardContentText } from '@/components/molecules/CardContent/CardContentText';
import { CardHeader } from '@/components/molecules/CardHeader/CardHeader';
import { CardContainer } from '@/components/organisms/Card/Card.styles';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import theme from '@/styles/theme';

interface ExtraCardProps {
  data: {
    cnt: number;
    cntPercent: number;
    yesterdayCntPercent: number;
  };
}

const ExtraCard = ({ data }: ExtraCardProps) => {
  const currentTheme = categoryToColorMap['Extra'];
  const color = theme.color[currentTheme];

  return (
    <CardContainer $borderColor={color}>
      <CardHeader
        text="기타 통계"
        imgSrc={require(`@/assets/images/img-extra.png`)}
      />
      <CardContentText type="횟수" data={data.cnt} unit="회" />
      <CardContentBar
        $borderColor={color}
        $ratio={data.cntPercent}
        $yesterDayRatio={data.yesterdayCntPercent}
      />
    </CardContainer>
  );
};

export { ExtraCard };
