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
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      box-shadow: 0px 8px 21px 0px rgba(0, 0, 0, 0.16);
    `,
    record: css`
      border-radius: 1.375rem;
      border: 1px solid;
      font-size: 16px;
      border-color: ${props.$borderColor || theme.color.gray3};
      background: ${({ theme }) => theme.color.white1};
    `,
    block: css`
      border-radius: 14px;
      border: 1px solid ${({ theme }) => theme.color.gray3};
      font-size: 16px;
      background: ${({ theme }) => theme.color.white1};
      display: flex;
      margin: 0 1rem 1rem 1rem;
    `,
    birthday: css`
      border-radius: 0.5625rem;
      border: 1px solid var(--grey-2, #c3c3c3);
      background: var(--white-1, #fff);
    `,
    gender: css`
      border-radius: 0.5625rem;
      border: 1px solid var(--grey-2, #c3c3c3);
      background: var(--white-1, #fff);
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
      width: 100%;
      height: 2.5rem;
      flex-shrink: 0;
    `,
    medium: css`
      width: 100%;
      height: 62px;
      /* flex-shrink: 0; */
    `,
    large: css`
      width: 100%;
      height: 3.5rem;
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
  border: 1px solid ${props => props.$borderColor || props.theme.color.gray2};
  ${({ variant = 'default', ...props }) => getVariantStyling(variant, props)}
  ${({ size = 'small' }) => getSizeStyling(size)}
`;

export { Button };
