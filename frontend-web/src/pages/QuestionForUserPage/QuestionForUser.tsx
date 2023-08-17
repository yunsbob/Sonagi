import { Back } from '@/components/atoms/Back/Back.styles';
import { Background } from '@/components/atoms/Background/Background.styles';
import React from 'react';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';

const QuestionForUser = () => {
  return (
    <>
      <Background $background={orangeBackground}>
        <Back> </Back>
      </Background>
    </>
  );
};

export default QuestionForUser;
