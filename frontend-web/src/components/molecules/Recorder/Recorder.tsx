import React, { ChangeEvent, useState } from 'react';
import * as S from '@/components/molecules/Recorder/Recorder.styles';
import { Text } from '@/components/atoms/Text/Text.styles';

interface RecorderProps {
  onDataUpdate: (data: string) => void;
}

const Recorder: React.FC<RecorderProps> = ({ onDataUpdate }) => {
  const [inputCount, setInputCount] = useState<number>(0);
  const [content, setContent] = useState<string>('');

  const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    onDataUpdate(e.target.value); // 콜백 함수 호출하여 데이터 전달
    setInputCount(e.target.value.length);
  };

  return (
    <>
      <S.MemoWrapper>
        <S.MemoArea
          onChange={onInputHandler}
          maxLength={150}
          placeholder="질문, 요청 사항을 입력 해주세요."
          value={content}
        ></S.MemoArea>
        <Text>
          <S.WordCount>{inputCount}/150</S.WordCount>
        </Text>
      </S.MemoWrapper>
    </>
  );
};

export default Recorder;
