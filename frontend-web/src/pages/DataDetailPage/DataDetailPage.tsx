import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import AmountRecorder from '@/components/molecules/AmountRecorder/AmountRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';

const DataDetailPage = () => {
  return (
    <>
      <TimeRecorder></TimeRecorder>
      <TimeRecorder></TimeRecorder>
      <BreastFeedRecorder></BreastFeedRecorder>
      <AmountRecorder></AmountRecorder>
      <MemoRecorder></MemoRecorder>
    </>
  );
};

export default DataDetailPage;
