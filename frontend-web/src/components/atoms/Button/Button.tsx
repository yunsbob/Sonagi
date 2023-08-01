import { forwardRef } from 'react';
import * as S from './Button.styles';

import type { ForwardedRef } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'register' | 'record' | 'block';
  size?: 'small' | 'xSmall' | 'medium';
  $backgroundColor?: string;
  $borderColor?: string;
}

const Button = (
  {
    variant,
    size,
    $backgroundColor,
    $borderColor,
    children,
    ...attributes
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <S.Button
      ref={ref}
      variant={variant}
      size={size}
      $backgroundColor={$backgroundColor}
      $borderColor={$borderColor}
      {...attributes}
    >
      {children}
    </S.Button>
  );
};

export default forwardRef(Button);
