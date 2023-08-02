import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import RecordContainer from '@/components/organisms/RecordContainer/RecordContainer';

const RecordPage = () => {
  return (
    <>
      <section>
        <CalendarBar></CalendarBar>
        <CategoryBar></CategoryBar>
      </section>
      <RecordContainer></RecordContainer>
    </>
  );
};

export default RecordPage;
