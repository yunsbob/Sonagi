import {
  DonutGraphContainer,
  GrapByDayContainer,
} from '@/components/organisms/GraphByDay/GraphByDay.styles';
import { Card } from '@/components/organisms/Card/Card';

const GraphByDay = () => {
  return (
    <GrapByDayContainer className="scrollable">
      <DonutGraphContainer>ㅇ</DonutGraphContainer>
      <Card />
    </GrapByDayContainer>
  );
};

export { GraphByDay };
