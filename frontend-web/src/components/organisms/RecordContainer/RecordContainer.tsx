import { useEffect, useRef, useState } from 'react';
import RecordBar from '@/components/molecules/RecordBar/RecordBar';
import RecordBlock from '@/components/molecules/RecordBlock/RecordBlock';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dateRecordedValuesState, recordedValues } from '@/states/recordState';
import { selectedCategoryState } from '@/states/categoryState';
import { RecordContainerStyle } from '@/components/organisms/RecordContainer/RecordContainer.styles';
import { PATH } from '@/constants/path';
import { RecordTypeA, RecordTypeB, RecordTypeC } from '@/types/recordTypes';
import theme from '@/styles/theme';
import { useGetAllCategoryRecords } from '@/apis/Record/Queries/useGetAllCategoryRecords';
import { selectedBabyState } from '@/states/babyState';
import { selectedDateState } from '@/states/dateState';
import { fetchCounterState } from '@/states/fetchCounterState';

type CombinedRecord =
  | (RecordTypeA & { category: string })
  | (RecordTypeB & { category: string })
  | (RecordTypeC & { category: string });

type RecordContainerProps = {
  combinedData: CombinedRecord[];
};

// const RecordContainer: React.FC<RecordContainerProps> = ({
const RecordContainer: React.FC<RecordContainerProps> = ({ combinedData }) => {
  const allDateRecordedValues = useRecoilValue(dateRecordedValuesState);
  // const recordedList = allDateRecordedValues[currentDate] || [];
  const currentCategory = useRecoilValue(selectedCategoryState(PATH.MAIN));
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedBaby = useRecoilValue(selectedBabyState);
  const selectedDate = useRecoilValue(selectedDateState);

  // setTimeout(() => {
  //   console.log('-------', allDateRecordedValues, recordedList, currentDate);
  // }, 1000);

  // 선택된 카테고리에 따라 쌓인 기록 블록들 필터링
  // const filteredRecordList = recordedList.filter(record => {
  //   if (currentCategory === 'All') {
  //     return true;
  //   }

  //   return record.category === currentCategory;
  // });

  useEffect(() => {
    const container = containerRef.current;
    const savedScrollTop = localStorage.getItem('scrollPosition');
    if (container && savedScrollTop) {
      container.scrollTop = Number(savedScrollTop);
    }
  }, []);

  // const [fetchCounter, setFetchCounter] = useState(0);
  const [fetchCounter, setFetchCounter] = useRecoilState(fetchCounterState);

  // const records = useGetAllCategoryRecords(selectedBaby.babyId, selectedDate);

  // 데이터가 추가되었을 ㄸㅐ ! -> 새로운 get요청 해야 함

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const onScroll = () => {
        localStorage.setItem('scrollPosition', String(container.scrollTop));
      };

      container.addEventListener('scroll', onScroll);
      return () => {
        container.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

  combinedData.forEach((item, index) => {
    console.log(item);
  });

  const onRecordUpdated = () => {
    // useGetAllCategoryRecords(selectedBaby.babyId, selectedDate);
    setFetchCounter(prev => prev + 1);
    // 여기서 FetchCounter를 쓰지 말고,
    // 추가된 객체만 combinedList에 넣어줄까?
    const container = containerRef.current;
    if (container) {
      setTimeout(() => {
        const targetScrollTop = container.scrollHeight;
        container.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth',
        });
      }, 1000); // DOM이 완전히 업데이트 된 후 스크롤 위치를 조정
    }
  };

  return (
    <>
      <RecordContainerStyle className="scrollable" ref={containerRef}>
        {combinedData.map((record, index) => (
          <RecordBlock
            key={index}
            color={theme.color.gray1}
            recordType={record.category}
            time={record.createdTime ? record.createdTime.substring(0, 5) : ''}
          />
        ))}
        {/* {filteredRecordList.map((record, index) => (
          <RecordBlock
            key={index}
            color={record.color}
            recordType={record.recordType}
            time={record.time}
          ></RecordBlock>
        ))} */}
      </RecordContainerStyle>
      <RecordBar onRecordUpdated={onRecordUpdated}></RecordBar>
    </>
  );
};

export default RecordContainer;
