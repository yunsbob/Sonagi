import React, { useState, ChangeEvent } from 'react';
import * as S from '@/components/atoms/Memo/Memo.style';
import { Text } from '@/components/atoms/Text/Text.styles';

const Memo = () => {
  const [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
  };

  return (
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
  );
};

export default Memo;
