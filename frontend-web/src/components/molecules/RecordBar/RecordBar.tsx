import Button from '@/components/atoms/Button/Button';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';

const RecordBar = () => {
  const RecordArray = [
    '수유',
    '분유',
    '유축 수유',
    '이유식',
    '소변',
    '유축',
    '체온',
    '병원',
    '투약',
    '예방 접종',
    '간식',
    '우유',
    '놀이',
    '터미 타임',
    '기타',
  ];

  return (
    <RecordBarContainer>
      {RecordArray.map((item, index) => (
        <Button
          variant="record"
          size="xSmall"
          key={index}
          style={{ padding: '0.7rem', alignItems: 'center', display: 'flex' }}
        >
          {item}
        </Button>
      ))}
    </RecordBarContainer>
  );
};

export default RecordBar;
