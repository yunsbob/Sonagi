// DoughnutChartByJun 수정본
import theme from '@/styles/theme';

// 도넛 뿌리기용 consts
const MAX_DEGREE = 360;
const VIEW_BOX = '0 0 300 300';
const xCenter = 150;
const yCenter = 150;
const radius = 80; // 도넛 크기
const sectorHeight = 70; // 도넛 두께
const sectorPadding = 7; // 기록 부채꼴 두께

// 글자 뿌리기용 consts
const outerRadius = 107; // Define outer radius for doughnut
const textRadius = outerRadius + 20; // A little outside the doughnut

// 시초선에서 n도 벌어진 점의 좌표
const getCoordsOnCircle = (degree: number) => {
  const radian = (degree / 180) * Math.PI;
  return {
    x: xCenter + radius * Math.cos(radian),
    y: yCenter + radius * Math.sin(radian),
  };
};

// 시작과 끝 각도로 호 그리기
export const getArc = (startDegree: number, finishDegree: number) => {
  const startCoord = getCoordsOnCircle(startDegree);
  const finishCoord = getCoordsOnCircle(finishDegree);
  const isLargeArc = finishDegree - startDegree > 180 ? 1 : 0;
  const isEnd = finishDegree === MAX_DEGREE;

  return `M ${startCoord.x} ${
    startCoord.y
  } A ${radius} ${radius} 0 ${isLargeArc} 1 ${finishCoord.x} ${finishCoord.y} ${
    isEnd ? 'Z' : ''
  }`;
};

// 주어진 시간 문자열 배열을 각도로 변환
export const timeStringToDegrees = (timeSections: string[]): number[] => {
  return timeSections.map(timeString => {
    const [hour, minute] = timeString.split(':').map(s => parseInt(s));
    const totalMinutes = (hour * 60 + minute + 1080) % 1440;
    return (totalMinutes / 4) % 360;
  });
};

// 주어진 시간 문자열을 각도로 변환하고 패딩 추가
export const timeToDegreeAddPadding = (
  timeString: string
): [number, number] => {
  const [hour, minute] = timeString.split(':').map(s => parseInt(s));
  const totalM = hour * 60 + minute;
  const leftTotal = (totalM - sectorPadding + 1080) % 1440;
  const rightTotal = (totalM + sectorPadding + 1080) % 1440;
  return [leftTotal / 4, rightTotal / 4];
};

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

const DoughnutChart: React.FC = () => {
  // 구간 도넛조각은 데이터 어떤 형식으로 들어오나요?
  const timeSections: string[] = ['07:32', '09:08'];
  const [start, finished] = timeStringToDegrees(timeSections);

  // 기록 도넛조각
  const recordedTimes: string[] = ['12:00', '03:48', '18:23', '16:08'];
  const testDegrees = recordedTimes.map(timeToDegreeAddPadding);
  const numbers = [];

  for (let i = 0; i <= 23; i++) {
    // for (let i = 0; i <= 23; i += 2) {
    const angle = ((i * 15 - 90) * Math.PI) / 180; // Center the text in each slice
    const x = xCenter + textRadius * Math.cos(angle);
    const y = yCenter + textRadius * Math.sin(angle);
    let displayText = i.toString();
    console.log(displayText);

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

  return (
    <svg viewBox={VIEW_BOX}>
      {numbers}
      <path // 배경 도넛
        d={getArc(0, 359.99)}
        stroke={theme.color.lightgrey}
        fill="transparent"
        strokeWidth={sectorHeight}
      />

      {/* <path // 구간 도넛
        d={getArc(start, finished)}
        stroke={theme.color.categoryDiaper}
        fill="transparent"
        strokeWidth={sectorHeight}
      /> */}

      {testDegrees.map((degree, index) => (
        <DoughnutSlice
          key={index}
          start={degree[0]}
          finished={degree[1]}
          color={theme.color.categoryMeal}
        />
      ))}
    </svg>
  );
};

export { DoughnutChart };
