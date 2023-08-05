import theme from '@/styles/theme';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import { useRecoilValue } from 'recoil';
import { selectedCategoryState } from '@/states/CategoryState';

import {
  xCenter,
  yCenter,
  VIEW_BOX,
  textRadius,
  sectorHeight,
} from '@/constants/doughnutConstants';

import {
  timeStringToDegrees,
  timeToDegreeAddPadding,
  getArc,
} from '@/utils/doughnutUtils';

import DoughnutSlice from '@/components/molecules/DoughnutSlices/DoughnutSlices';

const DoughnutChart: React.FC = () => {
  // numbers도 따로 molcules로 빼고 싶었지만 ... JSX의 svg Elements 관련 지식 무지로 보류
  const numbers = [];
  for (let i = 0; i <= 23; i++) {
    const angle = ((i * 15 - 90) * Math.PI) / 180;
    const x = xCenter + textRadius * Math.cos(angle);
    const y = yCenter + textRadius * Math.sin(angle);
    let displayText = i.toString();

    if (i % 2 === 1) {
      displayText = '•';
    }
    numbers.push(
      <text
        fontSize="9px"
        fill={theme.color.gray1}
        key={i}
        x={x}
        y={y}
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {displayText}
      </text>
    );
  }

  const currentCategory = useRecoilValue(selectedCategoryState);
  const currentColor = categoryToColorMap[currentCategory];

  const timeSections: string[] = ['07:32', '09:08'];
  const [start, finished] = timeStringToDegrees(timeSections);

  const recordedTimes: string[] = ['12:00', '03:48', '18:23', '16:08'];
  const testDegrees = recordedTimes.map(timeToDegreeAddPadding);

  return (
    <svg viewBox={VIEW_BOX}>
      {numbers}
      <path
        d={getArc(0, 359.99)}
        stroke={theme.color.lightgrey}
        fill="transparent"
        strokeWidth={sectorHeight}
      />
      <path // 구간 도넛
        d={getArc(start, finished)}
        stroke={theme.color[currentColor]}
        fill="transparent"
        strokeWidth={sectorHeight}
      />
      {testDegrees.map((degree, index) => (
        <DoughnutSlice
          key={index}
          start={degree[0]}
          finished={degree[1]}
          color={theme.color[currentColor]}
        />
      ))}
    </svg>
  );
};

export default DoughnutChart;
