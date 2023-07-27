import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

export interface ImageProps extends ComponentPropsWithRef<'img'> {
  width?: number;
  height?: number;
  unit?: string;
}

const ImageConatiner = styled.img<ImageProps>`
  width: ${props => `${props.width}${props.unit}` || 'auto'};
  height: ${props => `${props.height}${props.unit}` || 'auto'};
`;

export { ImageConatiner };
