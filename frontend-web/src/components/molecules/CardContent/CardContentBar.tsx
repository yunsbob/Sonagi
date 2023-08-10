import {
  CardBarContainer,
  CardBarWrapper,
} from '@/components/molecules/CardContent/CardContentBar.styles';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import { selectedCategoryState } from '@/states/categoryState';
import theme from '@/styles/theme';
import { useRecoilValue } from 'recoil';

interface CardStyleProp {
  $borderColor: string;
}

export interface CardContentBarProps extends CardStyleProp {
  $ratio: string | number;
}

const CardContentBar = ({ $borderColor, $ratio }: CardContentBarProps) => {
  return (
    <CardBarContainer>
      <CardBarWrapper $borderColor={$borderColor} $ratio={$ratio} />
    </CardBarContainer>
  );
};

export { CardContentBar };
