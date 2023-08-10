import { useEffect, useRef } from 'react';
import RecordBar from '@/components/molecules/RecordBar/RecordBar';
import RecordBlock from '@/components/molecules/RecordBlock/RecordBlock';
import { useRecoilValue, GetRecoilValue } from 'recoil';
import { recordedValues } from '@/states/RecordState';
import { selectedCategoryState } from '@/states/CategoryState';
import { RecordContainerStyle } from '@/components/organisms/RecordContainer/RecordContainer.styles';
import { PATH } from '@/constants/path';

const RecordContainer: React.FC = () => {
  const recordedList = useRecoilValue(recordedValues);
  const currentCategory = useRecoilValue(selectedCategoryState(PATH.MAIN));
  const containerRef = useRef<HTMLDivElement>(null);

  // 선택된 카테고리에 따라 쌓인 기록 블록들 필터링
  const filteredRecordList = recordedList.filter(record => {
    if (currentCategory === 'All') {
      return true;
    }

    return record.category === currentCategory;
  });

  useEffect(() => {
    const container = containerRef.current;
    const savedScrollTop = localStorage.getItem('scrollPosition');
    if (container && savedScrollTop) {
      container.scrollTop = Number(savedScrollTop);
    }
  }, []);

  const onRecordUpdated = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollTop = container.scrollHeight; // 목표 스크롤 위치
      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth', // html 태그에 기본으로 있는 ScrolOptions..
      });
    }
  };

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

  return (
    <>
      <RecordContainerStyle className="scrollable" ref={containerRef}>
        {filteredRecordList.map((record, index) => (
          <RecordBlock
            key={index}
            color={record.color}
            recordType={record.recordType}
            time={record.time}
          ></RecordBlock>
        ))}
      </RecordContainerStyle>
      <RecordBar onRecordUpdated={onRecordUpdated}></RecordBar>
    </>
  );
};

export default RecordContainer;
