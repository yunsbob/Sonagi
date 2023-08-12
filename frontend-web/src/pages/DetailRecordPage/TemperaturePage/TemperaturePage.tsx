import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import AmountRecorder from '@/components/molecules/AmountRecorder/AmountRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import * as S from '@/pages/DetailRecordPage/TemperaturePage/TemperaturePage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';

interface NameProps {
  name: string;
}

const TemperaturePage: React.FC<NameProps> = ({ name }) => {
  return (
    <>
      <Back>{name + ' 상세페이지'}</Back>
      <S.TemperaturePageContainer>
        <S.TemperaturePageWrapper>
          <S.Divider>
            <BreastFeedRecorder></BreastFeedRecorder>
          </S.Divider>
          <S.Divider>
            <TimeRecorder></TimeRecorder>
          </S.Divider>
          <S.Divider>
            <AmountRecorder
              unitType="온도"
              unit="℃"
              unitArray={[-1, -0.5, -0.1, +0.1, +0.5, +1.0]}
              defaultValue={36.5}
              minValue={35}
              maxValue={40}
            ></AmountRecorder>
          </S.Divider>
          <S.Divider>
            <MemoRecorder></MemoRecorder>
          </S.Divider>
          <Button
            option="activated"
            size="large"
            // onClick={onClickButton}
          >
            <Text size="headSmall" color={theme.color.white1}>
              등록하기
            </Text>
          </Button>
        </S.TemperaturePageWrapper>
      </S.TemperaturePageContainer>
    </>
  );
};

export default TemperaturePage;
