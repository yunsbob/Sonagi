import { GrapByDayContainer } from '@/components/organisms/GraphByDay/GraphByDay.styles';
import { Card } from '@/components/organisms/Card/Card';
import {
  getArc,
  oneTimeStringPaddingAndToDegrees,
  timeStringToDegrees,
} from '@/components/molecules/DougnutChar/DoughnutChartByJun';
import theme from '@/styles/theme';
import { DoughnutChart } from '@/components/molecules/DougnutChar/DoughnutChar';

const GraphByDay = () => {
  return (
    <GrapByDayContainer className="scrollable">
      <DoughnutChart />
      <Card />
    </GrapByDayContainer>
  );
};

export { GraphByDay };
