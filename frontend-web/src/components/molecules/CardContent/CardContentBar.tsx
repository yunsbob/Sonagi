import { Text } from '@/components/atoms/Text/Text.styles';
import {
  CardBarContainer,
  CardBarWrapper,
  Yesterday,
  YesterdayLine,
} from '@/components/molecules/CardContent/CardContentBar.styles';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import { selectedCategoryState } from '@/states/categoryState';
import theme from '@/styles/theme';
import { useRecoilValue } from 'recoil';

export interface YesterdayProps {
  $yesterDayRatio: number;
}

export interface CardBarWrapperProps {
  $borderColor: string;
  $ratio: string | number;
}

export interface CardContentBarProps
  extends YesterdayProps,
    CardBarWrapperProps {}

const CardContentBar = ({
  $borderColor,
  $ratio,
  $yesterDayRatio,
}: CardContentBarProps) => {
  return (
    <>
      <CardBarContainer>
        <CardBarWrapper $borderColor={$borderColor} $ratio={$ratio} />
        <Yesterday $yesterDayRatio={$yesterDayRatio}>
          <YesterdayLine />
          <Text size="xSmall">어제</Text>
        </Yesterday>
      </CardBarContainer>
    </>
  );
};

export { CardContentBar };
