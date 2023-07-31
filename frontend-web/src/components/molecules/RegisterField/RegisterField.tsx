import Button, { ButtonProps } from '@/components/atoms/Button/Button';
import Input, { InputProps } from '@/components/atoms/Input/Input';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import * as S from '@/components/molecules/RegisterField/RegisterField.style';
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

interface RegisterFieldProps {
  variant?: 'default' | 'register' | 'record';
  size?: 'small' | 'xSmall' | 'medium';
  $backgroundColor?: typeof theme.color;
  alertMessage?: string;
  getInputValue?: (value: string) => void;
  placeholder?: string;
}

const RegisterField = ({
  variant,
  size,
  alertMessage,
  getInputValue,
  placeholder,
}: RegisterFieldProps) => {
  const [value, setValue] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>(theme.color.gray3);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickRegisterButton = () => {
    getInputValue && getInputValue(value);
  };

  useEffect(() => {
    if (value.length > 0) {
      setBgColor(theme.gradient.orangeBtn);
    } else {
      setBgColor(theme.color.gray3);
    }
  }, [value]);

  return (
    <S.RegisterFieldStyle>
      <Input
        onChange={onChangeInput}
        value={value}
        alertMessage={alertMessage}
        placeholder={placeholder}
        fontSize={theme.fontSize.large}
      />
      <Button
        variant={variant}
        size={size}
        $backgroundColor={bgColor}
        onClick={onClickRegisterButton}
      >
        <Text size="large">등록하기</Text>
      </Button>
    </S.RegisterFieldStyle>
  );
};

export default RegisterField;
