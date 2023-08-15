import Button from '@/components/atoms/Button/Button';
import { RoundedRect } from '@/components/atoms/RoundedRect/RoundedRect';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import theme from '@/styles/theme';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { CombinedRecord } from '@/types/recordTypes';
import iconArrowMiniRightGrey from '@/assets/images/icon-arrow-mini-right-grey.png';

interface RecordBlockProps {
  color: string;
  recordType: string;
  time: string;
  record: CombinedRecord;
  recordId: string | number | undefined;
  // queryName:
  //   | 'infantFormulas'
  //   | 'breastFeedings'
  //   | 'babyFoods'
  //   | 'milks'
  //   | 'pumpingBreasts'
  //   | 'plays'
  //   | 'tummytimes'
  //   | 'pees'
  //   | 'poops'
  //   | 'fevers'
  //   | 'medications'
  //   | 'hospitals'
  //   | 'feedings'
  //   | 'snacks'
  //   | 'sleeps'
  //   | 'extras';
}

const TimeText = styled(Text)`
  margin: 0 12px 0 5px;
  color: ${theme.color.gray1};
  /* flex-grow: 1; */
`;

const MemoText = styled(TimeText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  margin-left: 18px;
`;

const BlockButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 14px;
  padding-right: 8px;
  background-color: ${theme.color.white2};

  img:last-child {
    margin-left: auto;
    justify-content: space-between;
  }
`;

const RecordBlock: React.FC<RecordBlockProps> = ({
  color,
  recordType,
  time,
  record,
  recordId,
  // queryName,
}) => {
  const navigate = useNavigate();
  console.log('-----sdfdsfd--', recordType);
  const OnClickButton = () => {
    // 이렇게 하는 방법 보다는 RecordBlock에서 미리 상세 정보를 가져오는게 좋겠다 ...
    setTimeout(() => {
      navigate(PATH.DETAILRECORD, {
        state: {
          recordType: recordType,
          recordName: record.category,
          recordId: recordId,
          //
        },
      });
    }, 300); // 뭔가.... 안에 페이지에서 get하는 순서가 안 맞는 것 같아 !
  };

  return (
    <BlockButton option="default" size="xLarge" onClick={OnClickButton}>
      <RoundedRect color={color} />
      <TimeText size="medium2">{time}</TimeText>
      <Text size="medium1" style={{ minWidth: 'fit-content' }}>
        {recordId}
        {record.category}
        {recordType}
      </Text>
      <MemoText size="medium2">{record.memo}</MemoText>
      <Image
        src={iconArrowMiniRightGrey}
        width={1.3}
        height={1.3}
        style={{ marginRight: '10px' }}
      />
    </BlockButton>
  );
};

export default RecordBlock;
