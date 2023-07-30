import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const getVariantStyling = (variant: Required<ButtonProps>['variant']) => {
  const style = {
    default: css``,
    register: css`
      border: 1px rgba(70, 70, 70, 0.6) solid;
      border: 1px ${({ theme }) => theme.color.gray2} solid;
      color: ${({ theme }) => theme.color.black3};
      box-shadow: 0px 8px 21px 0px rgba(0, 0, 0, 0.16);
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `,
    record: css`
      border-radius: 1.375rem;
      border: 1px solid var(--grey-3, #d7d7d7);
      background: var(--white-1, #fff);
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
      height: 1.9rem;
      flex-shrink: 0;
      padding: 4px;
      padding-right: 8px;
    `,
    small: css`
      width: 100%;
      height: 2.5rem;
      flex-shrink: 0;
    `,
    medium: css`
      width: 100%;
      height: 62px;
      flex-shrink: 0;
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
  font-family: Happiness Sans;
  text-align: center;
  background: ${props => props.$backgroundColor};
  ${({ variant = 'default' }) => getVariantStyling(variant)}
  ${({ size = 'small' }) => getSizeStyling(size)}
`;

export { Button };
