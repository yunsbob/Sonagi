import { Text } from '@/components/atoms/Text/Text.styles';
import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';

const GraphPage = () => {
  return (
    <>
      <section>
        <CalendarBar></CalendarBar>
        <CategoryBar></CategoryBar>
      </section>
      <Text size="headXLarge">그래프페이지입니다</Text>
    </>
  );
};

export default GraphPage;
