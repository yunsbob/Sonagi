import { CardContentBarProps } from '@/components/molecules/CardContent/CardContentBar';
import { styled } from 'styled-components';

const CardBarContainer = styled.div`
  height: 10px;
  background-color: ${({ theme }) => theme.color.gray4};
  border-radius: 4px;
  margin-bottom: 0.8rem;
`;

const CardBarWrapper = styled.div<CardContentBarProps>`
  height: 10px;
  width: ${props => `${props.$ratio}%`};
  background-color: ${props => (props.$borderColor + '96').slice(0, 7)};
  border-radius: 4px;
`;

export { CardBarContainer, CardBarWrapper };
