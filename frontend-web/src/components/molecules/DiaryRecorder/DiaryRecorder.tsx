import React, { useState, ChangeEvent } from 'react';
import * as S from '@/components/molecules/DiaryRecorder/DiaryRecorder.style';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';

const DiaryRecorder = () => {
  const [inputCount, setInputCount] = useState<number>(0);

  const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
  };

  return (
    <>
      <S.MemoWrapper>
        <S.MemoArea
          onChange={onInputHandler}
          maxLength={250}
          placeholder="오늘 우리 아이의 하루를 작성해주세요."
        ></S.MemoArea>
        <Text>
          <S.WordCount>{inputCount}/250</S.WordCount>
        </Text>
      </S.MemoWrapper>
    </>
  );
};

export default DiaryRecorder;
