import * as S from '@/components/molecules/CautionDetail/CautionDetail.styles';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import { ChangeEvent, useState } from 'react';

interface CautionDetailProps {
  onModalClose: () => void;
  name: string;
  memo: string;
}

const CautionDetail = ({ onModalClose, name, memo }: CautionDetailProps) => {
  const [inputValue, setInputValue] = useState('');
  const [inputCount, setInputCount] = useState(''.length);
  // const [memo, setMemo] = useState('');

  // const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setMemo(e.target.value);
  //   setInputCount(e.target.value.length);
  //   setInputValue(e.target.value);
  // };
  return (
    <>
      <S.MemoWrapper>
        <Text size="medium1">{name}</Text>
        <Text style={{ wordWrap: 'break-word' }} size="medium2">
          {memo}
        </Text>
      </S.MemoWrapper>
    </>
  );
};

export { CautionDetail };
