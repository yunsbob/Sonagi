import React, { useState } from 'react';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import * as S from '@/pages/QuestionForUserPage/QuestionForUser.styles';
import Back from '@/components/atoms/Back/Back';
import theme from '@/styles/theme';
import Recorder from '@/components/molecules/Recorder/Recorder';
import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const QuestionForUser = () => {
  const navigate = useNavigate();
  const [questionContent, setQuestionContent] = useState<string>('');
  const onDataUpdate = (content: string) => {
    setQuestionContent(content);
  };

  const handleSubmit = () => {
    alert('빠른 시일 내에 반영, 답변 드리겠습니다');
    navigate(PATH.MYPAGE);
  };

  return (
    <>
      <Background $background={orangeBackground}>
        <S.QuestionForUserContainer>
          <Back> </Back>
          <S.QuestionForUserHeader>
            <Text size={'headMedium'} $fontWeight={900}>
              질문 & 요청 등록
            </Text>
          </S.QuestionForUserHeader>
          <S.QuestionForUserBody>
            <Recorder onDataUpdate={onDataUpdate}></Recorder>
          </S.QuestionForUserBody>
          <S.RegisterBtnContainer>
            <Button option="activated" onClick={handleSubmit}>
              등록하기
            </Button>
          </S.RegisterBtnContainer>
        </S.QuestionForUserContainer>
      </Background>
    </>
  );
};

export default QuestionForUser;
