import styled, { css } from 'styled-components';

export interface TextProps {
  size?:
    | 'headXLarge'
    | 'headXLarge'
    | 'headMedium'
    | 'headSmall'
    | 'large'
    | 'medium1'
    | 'medium2'
    | 'small'
    | 'xSmall';
}

const getSizeStyling = (size: Required<TextProps>['size']) => {
  const style = {
    headXLarge: css`
      // main 소나기 타이틀
      font-size: 40px;
      font-weight: 700;
      letter-spacing: -2.4px;
    `,
    headLarge: css`
      // 기록 필드 시간
      font-size: 30px;
      font-weight: 400;
    `,
    headMedium: css`
      font-size: 25px;
      font-weight: 400;
    `,
    headSmall: css`
      font-size: 18px;
      font-weight: 400;
    `,
    large: css`
      // 큰 버튼
      font-size: 20px;
      font-weight: 400;
    `,
    medium1: css`
      font-size: 16px;
      font-weight: 400;
    `,
    medium2: css`
      // 작은 버튼
      font-size: 15px;
      font-weight: 400;
    `,
    small: css`
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.4px;
    `,
    xSmall: css`
      // 하단 푸터 아이콘 아래의 텍스트
      font-size: 8px;
      font-weight: 400;
    `,
  };
  return style[size];
};

const Text = styled.p<TextProps>`
  ${({ size = 'headMedium' }) => getSizeStyling(size)}
`;

export { Text };
