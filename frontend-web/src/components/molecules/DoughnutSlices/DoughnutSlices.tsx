import { getArc } from '@/utils/doughnutUtils';
import { sectorHeight } from '@/constants/doughnutConstants';

interface DoughnutSliceProps {
  start: number;
  finished: number;
  color: string;
}

const DoughnutSlice: React.FC<DoughnutSliceProps> = ({
  start,
  finished,
  color,
}) => (
  <path d={getArc(start, finished)} stroke={color} strokeWidth={sectorHeight} />
);

export default DoughnutSlice;
