import styled, { css } from 'styled-components';

export interface TextProps {
  size?:
    | 'headXLarge'
    | 'headLarge'
    | 'headMedium'
    | 'headSmall'
    | 'large'
    | 'medium1'
    | 'medium1Bold'
    | 'medium2'
    | 'medium3'
    | 'small'
    | 'xSmall';
}

const getSizeStyling = (size: Required<TextProps>['size'] = 'headMedium') => {
  const style = {
    // main 소나기 타이틀
    headXLarge: css`
      font-size: 40px;
      font-weight: 700;
      letter-spacing: -2.4px;
    `,
    // 기록 필드 시간
    headLarge: css`
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
    // 큰 버튼
    large: css`
      font-size: 20px;
      font-weight: 400;
    `,
    medium1: css`
      font-size: 16px;
      font-weight: 400;
    `,
    medium1Bold: css`
      font-size: 16px;
      font-weight: 700;
    `,
    // 작은 버튼
    medium2: css`
      font-size: 15px;
      font-weight: 400;
    `,
    medium3: css`
      font-size: 13px;
      font-weight: 400;
    `,
    small: css`
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.4px;
    `,
    // 하단 푸터 아이콘 아래의 텍스트
    xSmall: css`
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
