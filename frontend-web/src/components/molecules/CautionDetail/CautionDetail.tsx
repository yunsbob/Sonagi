import * as S from '@/components/molecules/CautionDetail/CautionDetail.styles';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import { ChangeEvent, useState } from 'react';

const CautionDetail = (onModalClose: any) => {
  const [inputValue, setInputValue] = useState('');
  const [inputCount, setInputCount] = useState(''.length);
  const [memo, setMemo] = useState('');

  const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
    setInputCount(e.target.value.length);
    setInputValue(e.target.value);
  };
  return (
    <>
      <S.MemoWrapper>
        <S.MemoArea
          value={inputValue}
          // onTouchStart={onTouchStartHandler}
          onChange={onInputHandler}
          maxLength={139}
          placeholder={'주의사항을 입력해주세요.'}
        ></S.MemoArea>
        <Text>
          <S.WordCount>{inputCount}/140</S.WordCount>
        </Text>
      </S.MemoWrapper>
    </>
  );
};

export { CautionDetail };
