import { GrapByDayContainer } from '@/components/organisms/GraphByDay/GraphByDay.styles';
import { Card } from '@/components/organisms/Card/Card';
import DoughnutChart from '@/components/molecules/DoughnutChart/DoughnutChart';

const GraphByDay = () => {
  return (
    <GrapByDayContainer className="scrollable">
      <DoughnutChart />
      <Card />
    </GrapByDayContainer>
  );
};

export { GraphByDay };
