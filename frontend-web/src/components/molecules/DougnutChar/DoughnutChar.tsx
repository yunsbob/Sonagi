import { DonutGraphContainer } from '@/components/molecules/DougnutChar/DoughnutChart.style';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import { selectedCategoryState } from '@/states/CategoryState';
import theme from '@/styles/theme';
import { useRecoilValue } from 'recoil';

const DoughnutChart = () => {
  const currentCategory = useRecoilValue(selectedCategoryState);
  const currentTheme = categoryToColorMap[currentCategory];

  return (
    <DonutGraphContainer>
      <svg viewBox="0 0 300 300">
        <circle
          cx="150"
          cy="150"
          r="90"
          fill="none"
          stroke={theme.color.lightgrey}
          strokeWidth="60"
        />
        <circle
          cx="150"
          cy="150"
          r="90"
          fill="none"
          stroke={theme.color[currentTheme]}
          strokeWidth="60"
          strokeDasharray={`${2 * Math.PI * 90 * 0.01} ${
            2 * Math.PI * 90 * 0.99
          }`}
          strokeDashoffset={2 * Math.PI * 90 * 0.25}
        />
        <circle
          cx="150"
          cy="150"
          r="90"
          fill="none"
          stroke={theme.color[currentTheme]}
          strokeWidth="60"
          strokeDasharray={`${2 * Math.PI * 90 * 0.01} ${
            2 * Math.PI * 90 * 0.99
          }`}
          strokeDashoffset={2 * Math.PI * 90 * 0.75}
        />
      </svg>
    </DonutGraphContainer>
  );
};

export { DoughnutChart };
