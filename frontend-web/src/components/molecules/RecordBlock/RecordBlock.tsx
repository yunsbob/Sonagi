import Button from '@/components/atoms/Button/Button';
import { RoundedRect } from '@/components/atoms/RoundedRect/RoundedRect';
import { Text } from '@/components/atoms/Text/Text.styles';

interface RecordBlockProps {
  color: string;
  recordType: string;
  time: string;
}

interface RecordBlockProps {}

const RecordBlock: React.FC<RecordBlockProps> = ({
  color,
  recordType,
  time,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <RoundedRect color={color} />
      <Text size="headSmall">{time}</Text>
      <div style={{ marginRight: '10px' }}> </div>
      <Text size="headSmall">{recordType}</Text>
    </div>
  );
};

export default RecordBlock;
