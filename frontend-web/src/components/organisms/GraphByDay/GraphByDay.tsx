import {
  CardContainer,
  DonutGraphContainer,
  GrapByDayContainer,
} from '@/components/organisms/GraphByDay/GraphByDay.styles';
import { selectedCategoryState } from '@/states/CategoryState';
import { useRecoilValue } from 'recoil';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import theme from '@/styles/theme';
import { Text } from '@/components/atoms/Text/Text.styles';

const GraphByDay = () => {
  const currentCategory = useRecoilValue(selectedCategoryState);
  const currentTheme = categoryToColorMap[currentCategory];

  console.log(theme.color[currentTheme]);
  return (
    <GrapByDayContainer className="scrollable">
      <DonutGraphContainer>ㅇ</DonutGraphContainer>
      <CardContainer $borderColor={theme.color[currentTheme]}>
        <Text>식사 통계</Text>
        <div>
          <Text>
            횟수 <b>4</b>회
          </Text>
        </div>
      </CardContainer>
    </GrapByDayContainer>
  );
};

export { GraphByDay };
