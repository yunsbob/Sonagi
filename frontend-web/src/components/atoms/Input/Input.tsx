import {
  InputContainer,
  InputStyleProps,
} from '@/components/atoms/Input/Input.style';
import { Text } from '@/components/atoms/Text/Text.styles';
import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  alertMessage?: string;
  testFunc?: (value: string) => void;
}

const Input = (
  { alertMessage, testFunc, children, ...attributes }: InputProps,
  { inputType, height, borderRadius, unit, fontSize }: InputStyleProps
) => {
  const [value, setValue] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof testFunc !== 'undefined') {
      testFunc(e.target.value);
    }
    setValue(e.target.value);
  };

  return (
    <>
      <InputContainer
        value={value}
        inputType={inputType}
        height={height ?? 4}
        borderRadius={borderRadius}
        unit={unit ?? 'rem'}
        onChange={onInputChange}
        fontSize={fontSize ?? 20}
        {...attributes}
      >
        {children}
      </InputContainer>
      {alertMessage && value.length > 10 && <Text>{alertMessage}</Text>}
    </>
  );
};

export default Input;
