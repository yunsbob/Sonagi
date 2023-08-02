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
  option?:
    | 'default'
    | 'imgBtn'
    | 'deActivated'
    | 'ActivatedOrange'
    | 'ActivatedBlue'
    | 'activated'
    | 'primary'
    | 'danger';
  size?: 'small' | 'xSmall' | 'medium';
  $backgroundColor?: typeof theme.color;
  alertMessage?: string;
  onClickButtonAction?: (value: string) => void;
  placeholder?: string;
  activeButtonColor?: string;
}

const RegisterField = ({
  option,
  size,
  alertMessage,
  onClickButtonAction,
  placeholder,
  activeButtonColor = theme.gradient.orangeBtn,
}: RegisterFieldProps) => {
  const [value, setValue] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>(theme.color.gray3);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickButton = () => {
    onClickButtonAction && onClickButtonAction(value);
  };

  useEffect(() => {
    if (value.length > 0) {
      setBgColor(activeButtonColor);
    } else {
      setBgColor(theme.color.gray3);
    }
  }, [value.length, activeButtonColor]);

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
        option={option}
        size={size}
        $backgroundColor={bgColor}
        onClick={onClickButton}
      >
        <Text size="large">등록하기</Text>
      </Button>
    </S.RegisterFieldStyle>
  );
};

export default RegisterField;
