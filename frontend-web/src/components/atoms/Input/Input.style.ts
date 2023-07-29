import theme from '@/styles/theme';
import { css, styled } from 'styled-components';

export interface InputStyleProps {
  inputType?: 'text' | 'memo';
  height?: number | string;
  borderRadius?: number;
  unit?: 'rem' | 'px' | 'em';
  fontSize?: number;
}

const getTypeStyling = (inputType: Required<InputStyleProps>['inputType']) => {
  const style = {
    // 기본 input
    text: css`
      border: 2px solid ${({ theme }) => theme.color.gray2};
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: ${({ theme }) => theme.color.black3};
      background-color: ${({ theme }) => theme.color.white2};
      text-align: center;

      &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.color.skyblue};
      }

      &:focus::placeholder {
        color: transparent;
      }
    `,
    // memo 용 input
    memo: css`
      border: none;
      background-color: #f5f5f5;
    `,
  };
  return style[inputType];
};

const InputContainer = styled.input<InputStyleProps>`
  ${({ inputType = 'text' }) => getTypeStyling(inputType)};
  width: ${props => '100%' || `${props.width}${props.unit}`};
  height: ${props => `${props.height}${props.unit}`};
  border-radius: ${props => '22px' || `${props.borderRadius}px`};
  font-size: ${props => `${props.fontSize}px`};
`;

export { InputContainer };
