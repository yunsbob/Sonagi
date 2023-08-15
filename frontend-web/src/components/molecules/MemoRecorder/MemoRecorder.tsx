import React, { useState, ChangeEvent } from 'react';
import * as S from '@/components/molecules/MemoRecorder/MemoRecorder.style';
import { Text } from '@/components/atoms/Text/Text.styles';

interface MemoRecorderProps {
  setMemo: (value: string) => void;
}

const MemoRecorder = ({ setMemo }: MemoRecorderProps) => {
  const [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
    setInputCount(e.target.value.length);
  };

  return (
    <>
      <S.MemoTextWrapper>
        <Text size="headSmall"> 메모 </Text>
      </S.MemoTextWrapper>
      <S.MemoWrapper>
        <S.MemoArea
          onChange={onInputHandler}
          maxLength={49}
          placeholder="필요한 메모를 입력해 보세요"
        ></S.MemoArea>
        <Text>
          <S.WordCount>{inputCount}/50</S.WordCount>
        </Text>
      </S.MemoWrapper>
    </>
  );
};

export default MemoRecorder;
