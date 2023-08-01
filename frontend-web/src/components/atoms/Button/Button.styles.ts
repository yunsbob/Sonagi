import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';
import theme from '@/styles/theme';

const getVariantStyling = (
  variant: Required<ButtonProps>['variant'],
  props: ButtonProps
) => {
  const style = {
    default: css``,
    register: css`
      color: ${({ theme }) => theme.color.black3};
      box-shadow: 0px 8px 21px 0px rgba(0, 0, 0, 0.16);
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `,
    record: css`
      border-radius: 1.375rem;
      border: 1px solid;
      font-size: 16px;
      border-color: ${props.$borderColor || theme.color.gray3};
      background: ${({ theme }) => theme.color.white1};
    `,
  };

  return style[variant];
};

const getSizeStyling = (size: Required<ButtonProps>['size']) => {
  const style = {
    xSmall: css`
      width: auto;
      height: 2.1rem;
      flex-shrink: 0;
      padding: 0.3rem;
      padding-right: 0.6rem;
    `,
    small: css`
      width: 4.375rem;
      height: 2.5rem;
      flex-shrink: 0;
    `,
    medium: css`
      width: 100%;
      height: 62px;
      flex-shrink: 0;
    `,
  };
  return style[size];
};

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 22px;
  text-align: center;
  background: ${props => props.$backgroundColor};
  ${({ variant = 'default', ...props }) => getVariantStyling(variant, props)}
  ${({ size = 'small' }) => getSizeStyling(size)}
`;

export { Button };
