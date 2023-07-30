import GenderButtons from '@/components/molecules/GenderButtons/GenderButtons';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Back } from '@/components/atoms/Back/Back.styles';
import { useState, ChangeEvent, useEffect } from 'react';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import AddBaby from '@/components/molecules/AddBaby/AddBaby';
import theme from '@/styles/theme';

const RegisterBabyProfile = () => {
  const placeholder = '이름을 입력하세요';
  const alertMessage = '10자 이내로 입력해주세요';

  const [value, setValue] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>(theme.color.gray3);

  useEffect(() => {
    if (value.length > 0) {
      setBgColor(theme.gradient.orangeBtn);
    } else {
      setBgColor(theme.color.gray3);
    }
  }, [value]);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Back />
      <Text>
        출생일과 성별, <br /> 이름을 입력해주세요
      </Text>
      <GenderButtons />
      <Button
        variant="birthday"
        size="large"
        style={{ fontSize: theme.fontSize.large, color: theme.color.black3 }}
      >
        출생일
      </Button>
      <Input
        onChange={changeInput}
        value={value}
        alertMessage={alertMessage}
        placeholder={placeholder}
        fontSize={theme.fontSize.large}
        height={3.5}
      />
      <AddBaby />
      <Button variant="register" size="large" $backgroundColor={bgColor}>
        등록하기
      </Button>
    </>
  );
};

export default RegisterBabyProfile;
