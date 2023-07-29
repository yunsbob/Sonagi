import { forwardRef } from 'react';
import * as S from './Button.styles';

import type { ComponentPropsWithRef, ForwardedRef } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'default' | 'register';
  size?: 'small';
  typed?: false;
}

const Button = (
  { variant, size, children, ...attributes }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <S.Button ref={ref} variant={variant} size={size} {...attributes}>
      {children}
    </S.Button>
  );
};

export default forwardRef(Button);
