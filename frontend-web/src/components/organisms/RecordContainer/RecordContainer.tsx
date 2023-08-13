import { useEffect, useRef, useState } from 'react';
import RecordBar from '@/components/molecules/RecordBar/RecordBar';
import RecordBlock from '@/components/molecules/RecordBlock/RecordBlock';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategoryState } from '@/states/categoryState';
import { RecordContainerStyle } from '@/components/organisms/RecordContainer/RecordContainer.styles';
import { PATH } from '@/constants/path';
import { CombinedRecord } from '@/types/recordTypes';
import theme from '@/styles/theme';
import { useGetAllCategoryRecords } from '@/apis/Record/Queries/useGetAllCategoryRecords';
import { selectedBabyState } from '@/states/babyState';
import { selectedDateState } from '@/states/dateState';
import { fetchCounterState } from '@/states/fetchCounterState';

type RecordContainerProps = {
  combinedData: CombinedRecord[];
};

const RecordContainer: React.FC<RecordContainerProps> = ({ combinedData }) => {
  const currentCategory = useRecoilValue(selectedCategoryState(PATH.MAIN));
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedBaby = useRecoilValue(selectedBabyState);
  const selectedDate = useRecoilValue(selectedDateState);

  // 선택된 카테고리에 따라 쌓인 기록 블록들 필터링
  // const filteredRecordList = recordedList.filter(record => {
  //   if (currentCategory === 'All') {
  //     return true;
  //   }

  //   return record.category === currentCategory;
  // });
  const [fetchCounter, setFetchCounter] = useRecoilState(fetchCounterState);

  useEffect(() => {
    const container = containerRef.current;
    const savedScrollTop = localStorage.getItem('scrollPosition');
    if (container && savedScrollTop) {
      container.scrollTop = Number(savedScrollTop);
    }
  }, [combinedData, fetchCounter]);

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
    // combinedData.forEach((item, index) => {
    //   console.log('sdfdsf');
    //   console.log(item, '---------');
    // });
  }, [combinedData, fetchCounter]);

  const onRecordUpdated = () => {
    // useGetAllCategoryRecords(selectedBaby.babyId, selectedDate);
    console.log('!!', fetchCounter);
    setFetchCounter(fetchCounter => fetchCounter + 1);
    const container = containerRef.current;
    if (container) {
      setTimeout(() => {
        const targetScrollTop = container.scrollHeight;
        container.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth',
        });
      }, 700); // DOM이 완전히 업데이트 된 후 스크롤 위치를 조정
    }
  };

  // TODO: recordBlock 안에 <recordType>id를 넣어줘야함
  return (
    <>
      <RecordContainerStyle className="scrollable" ref={containerRef}>
        {combinedData.map((record, index) => (
          <RecordBlock
            key={index}
            color={theme.color.gray1}
            recordType={record.category}
            record={record}
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
