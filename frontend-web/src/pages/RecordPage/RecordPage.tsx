import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import RecordContainer from '@/components/organisms/RecordContainer/RecordContainer';
import { PATH } from '@/constants/path';

const RecordPage = () => {
  return (
    <>
      <section>
        <CalendarBar></CalendarBar>
        <CategoryBar path={PATH.MAIN}></CategoryBar>
      </section>
      <div style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <RecordContainer></RecordContainer>
      </div>
    </>
  );
};

export default RecordPage;
