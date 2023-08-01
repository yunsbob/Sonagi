import Button from '@/components/atoms/Button/Button';
import { RoundedRect } from '@/components/atoms/RoundedRect/RoundedRect';
import theme from '@/styles/theme';

interface RecordBlockProps {
  color?: keyof typeof theme.color;
}

const RecordBlock: React.FC<RecordBlockProps> = ({ color }) => {
  return (
    <Button>
      <RoundedRect color={color} />
    </Button>
  );
};

export default RecordBlock;
