import * as S from '@/components/atoms/Input/Input.style';
import { Text } from '@/components/atoms/Text/Text.styles';
import React, {
  ChangeEvent,
  ComponentPropsWithRef,
  InputHTMLAttributes,
  useRef,
  useState,
} from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    S.InputStyleProps {
  alertMessage?: string;
}

const Input = (
  {
    alertMessage,
    children,
    inputType,
    height,
    borderRadius,
    unit,
    fontSize,
    ...attributes
  }: InputProps,
  ref?: React.LegacyRef<HTMLInputElement>
) => {
  return (
    <div>
      <S.InputContainer
        ref={ref}
        inputType={inputType}
        height={height ?? 4}
        borderRadius={borderRadius}
        unit={unit ?? 'rem'}
        fontSize={fontSize ?? 20}
        maxLength={10}
        {...attributes}
      />
      {/* {alertMessage && value.length > 10 && (
        <Text size="medium3">{alertMessage}</Text>
      )} */}
    </div>
  );
};

export default React.forwardRef(Input);
