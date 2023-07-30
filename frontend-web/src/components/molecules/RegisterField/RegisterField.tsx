import Button, { ButtonProps } from '@/components/atoms/Button/Button';
import Input, { InputProps } from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import * as S from '@/components/molecules/RegisterField/RegisterField.style';
import {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

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
  const [state, setStsate] = useState<'active' | 'disabled'>('disabled');

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  useMemo(() => {
    if (value.length > 0) {
      setStsate('active');
    } else {
      setStsate('disabled');
    }
  }, [value]);

  return (
    <S.RegisterFieldStyle>
      <Input
        onChange={changeInput}
        value={value}
        alertMessage={alertMessage}
        placeholder={placeholder}
        fontSize={theme.fontSize.large}
      />
      <Button
        variant={variant}
        size={size}
        // $backgroundColor={bgColor}
        state={state}
      >
        <Text size="large">등록하기</Text>
      </Button>
    </S.RegisterFieldStyle>
  );
};

export default RegisterField;
