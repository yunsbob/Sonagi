import { Text } from '@/components/atoms/Text/Text.styles';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import RecordBar from '@/components/molecules/RecordBar/RecordBar';

const RecordPage = () => {
  return (
    <div>
      <section style={{ border: '1px solid black' }}> (임시) 캘린더 </section>
      <CategoryBar></CategoryBar>

      <Text size="headXLarge">기록 블록 1</Text>
      <Text size="headXLarge">기록 블록 2</Text>
      <Text size="headXLarge">기록 블록 3</Text>

      <RecordBar></RecordBar>
    </div>
  );
};

export default RecordPage;
