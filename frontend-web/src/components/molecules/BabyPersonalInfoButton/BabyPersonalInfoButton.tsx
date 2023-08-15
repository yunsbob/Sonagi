import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from '@/components/molecules/BabyPersonalInfoButton/BabyPersonalInfoButton.styles';

interface BabyPersonalInfoButtonProps {
  memo: string;
  name: string;
}

const BabyPersonalInfoButton = ({
  memo,
  name,
}: BabyPersonalInfoButtonProps) => {
  return (
    <S.BabyPersonalInfoButtonContainer>
      <Button style={{ height: '164px', width: '133px' }}>
        <Text size="medium3">{memo}</Text>
        <S.NameWrapper>
          <Text size="small">{name}</Text>
        </S.NameWrapper>
      </Button>
    </S.BabyPersonalInfoButtonContainer>
  );
};

export { BabyPersonalInfoButton };
