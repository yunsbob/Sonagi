import Button, { ButtonProps } from '@/components/atoms/Button/Button';
import Input, { InputProps } from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import * as S from '@/components/molecules/RegisterField/RegisterField.style';
import { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';

interface RegisterFieldProps {
  variant?: 'default' | 'register';
  size?: 'small';
  $backgroundColor?: typeof theme.color;
  alertMessage?: string;

  placeholder?: string;
}

const RegisterField = ({
  variant,
  size,
  $backgroundColor,
  alertMessage,
  placeholder,
}: RegisterFieldProps) => {
  // const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(inputRef.current);
    // if (inputRef.current) {
    //   setValue(inputRef.current?.value);
    // }
    setValue(e.target.value);
  };

  return (
    <S.RegisterFieldStyle>
      <Input
        value={value}
        onChange={changeInput}
        alertMessage={alertMessage}
        placeholder={placeholder}
        fontSize={theme.fontSize.large}
      />
      <Button
        variant={variant ?? 'register'}
        size={size ?? 'small'}
        $backgroundColor={
          value.length > 0 ? theme.gradient.orangeBtn : theme.color.gray3
        }
      >
        <Text size="large">등록하기</Text>
      </Button>
    </S.RegisterFieldStyle>
  );
};

export default RegisterField;
