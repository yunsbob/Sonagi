import theme from '@/styles/theme';

const MAX_DEGREE = 360;
const xCenter = 150;
const yCenter = 150;
const radius = 80;
const sectorHeight = 70;

// 삼각함수로 시초선에서 n도 벌어진 점의 좌표를 구하는 함수
// 시초선: 일반각의 기준 & Coords: 좌표들
const getCoordsOnCircle = (degree: number) => {
  const radian = (degree / 180) * Math.PI;
  return {
    x: xCenter + radius * Math.cos(radian),
    y: yCenter + radius * Math.sin(radian),
  };
};

// x, y를 중심 축으로 하여 degree(θ)만큼 +방향으로 호를 그리는 함수
export const getArc = (startDegree: number, finishDegree: number) => {
  const startCoord = getCoordsOnCircle(startDegree);
  const finishCoord = getCoordsOnCircle(finishDegree);

  const isLargeArc = finishDegree - startDegree > 180 ? 1 : 0;
  const isEnd = finishDegree === MAX_DEGREE;

  const d = `M ${startCoord.x} ${
    startCoord.y
  } A ${radius} ${radius} 0 ${isLargeArc} 1 ${finishCoord.x} ${finishCoord.y} ${
    isEnd ? 'Z' : ''
  }`;

  return d;
};

export const timeStringToDegrees = (timeStrings: string[]) => {
  const result = [];

  for (const timeString of timeStrings) {
    // 시간 문자열을 시간과 분으로 분리합니다.
    const [hourStr, minuteStr] = timeString.split('시');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr.replace('분', '').trim());

    // 입력된 시간을 분으로 변환합니다.
    const totalMinutes = (hour * 60 + minute + 1080) % 1440;
    const degree = totalMinutes / 4;

    result.push(degree % 360);
  }
  return result; //23, 24
};

// 추측: 너무 얇은 선이 아닌 두께를 좀 준다
export const oneTimeStringPaddingAndToDegrees = (timeString: string) => {
  const [hourStr, minuteStr] = timeString.split('시');
  const hour = parseInt(hourStr);
  const minute = parseInt(minuteStr.replace('분', '').trim());

  const totalM = hour * 60 + minute;
  const leftTotal = (totalM - 4 + 1080) % 1440;
  const rightTotal = (totalM + 4 + 1080) % 1440;
  const leftDegree = leftTotal / 4;
  const rightDegree = rightTotal / 4;
  return [leftDegree, rightDegree];
};

const DoughnutChartByJun = () => {
  const timeStrings: string[] = ['7시32분', '8시36분']; // 구간
  const testString = '12시00분';
  const [start, finished] = timeStringToDegrees(timeStrings);
  const [start1, finished1] = oneTimeStringPaddingAndToDegrees(testString);

  return (
    <svg viewBox="0 0 300 300">
      <path
        d={getArc(0, 359.99)} // 0, 360이 되면 안 그려지는 이유가 뭘까? -> dist가 0이 돼서 그러함
        stroke={theme.color.lightgrey}
        fill="transparent"
        strokeWidth={sectorHeight}
      />
      <path
        d={getArc(start, finished)}
        stroke={theme.color.categoryDiaper}
        fill="transparent"
        strokeWidth={sectorHeight}
      />
      <path
        d={getArc(start1, finished1)}
        stroke={theme.color.categoryMeal}
        fill="transparent"
        strokeWidth={sectorHeight}
      />
    </svg>
  );
};

export { DoughnutChartByJun };
