import React, { ReactNode } from 'react';
import * as S from '@/components/organisms/Modal/Modal.styles';
import ModalPortal from '@/components/organisms/ModalPortal/ModalPortal';

interface ModalProps extends S.ModalStyleProps {
  children: ReactNode;
}

const Modal = ({
  width,
  height,
  borderRadius = 16,
  unit = 'rem',
  children,
}: ModalProps) => {
  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalContainer
          width={width}
          height={height}
          borderRadius={borderRadius}
          unit={unit}
        >
          {children}
        </S.ModalContainer>
      </S.ModalBackground>
    </ModalPortal>
  );
};

export default Modal;
