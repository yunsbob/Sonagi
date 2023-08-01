import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const getVariantStyling = (variant: Required<ButtonProps>['variant']) => {
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
      border: 1px solid var(--grey-3, #d7d7d7);
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
  border: 1px solid ${props => props.$borderColor || props.theme.color.gray2};
  ${({ variant = 'default' }) => getVariantStyling(variant)}
  ${({ size = 'small' }) => getSizeStyling(size)}
`;

export { Button };
