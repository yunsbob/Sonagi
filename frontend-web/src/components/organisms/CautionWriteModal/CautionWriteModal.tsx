import { Text } from '@/components/atoms/Text/Text.styles';
import { CautionWriteModalContainer } from '@/components/organisms/CautionWriteModal/CautionWriteModal.styles';
import Modal from '@/components/organisms/Modal/Modal';
import { BabiesOfUser, CustomModal } from '@/types';
import copy from '@/assets/images/icon-copy-gray.png';
import { Image } from '@/components/atoms/Image/Image';
import { useRef, useState } from 'react';
import { Toast } from '@/components/organisms/Toast/Toast';
import { useRecoilValue } from 'recoil';
import { selectedBabyState } from '@/states/babyState';
// import { useGetCaution } from '@/apis/Baby/Queries/useGetCaution';
import kakao from '@/assets/images/img-logo-kakao.png';
import Button from '@/components/atoms/Button/Button';
import { MemoArea } from '@/components/molecules/DiaryRecorder/DiaryRecorder.style';

const CautionWriteModal = ({ onModalClose, modalOpen }: CustomModal) => {
  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);

  return (
    <>
      <Modal isOpen={modalOpen} onClose={onModalClose}>
        <CautionWriteModalContainer>
          <MemoArea></MemoArea>
          <Text size="large">초대 코드</Text>
          <Button onClick={() => {}}>
            <Image src={kakao} width={2} />
            <Text size="medium1">
              <b>카카오톡</b>으로 공유하기
            </Text>
          </Button>
          <Button option="activated" size="large" onClick={onModalClose}>
            확인
          </Button>
        </CautionWriteModalContainer>
      </Modal>
    </>
  );
};

export { CautionWriteModal };
