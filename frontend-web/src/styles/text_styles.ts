import styled, { css } from 'styled-components';

export interface TextProps {
  size?: 'headLarge' | 'headMedium' | 'headSmall';
}

const getSizeStyling = (size: Required<TextProps>['size']) => {
  const style = {
    headLarge: css`
      font-size: 40px;
      font-weight: 700;
      letter-spacing: -2.4px;
    `,
    headMedium: css`
      font-size: 25px;
      font-weight: 400;
    `,
    headSmall: css`
      font-size: 18px;
      font-weight: 400;
    `,
  }
  return style[size];
};

const Text = styled.p<TextProps>`
  ${({ size = 'headMedium' }) => getSizeStyling(size)}
`;

export { Text };
