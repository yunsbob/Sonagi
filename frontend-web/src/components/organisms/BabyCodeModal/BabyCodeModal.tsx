import { Text } from '@/components/atoms/Text/Text.styles';
import {
  BabyCodeModalContainer,
  BabyCodeWrapper,
} from '@/components/organisms/BabyCodeModal/BabyCodeModal.styles';
import Modal from '@/components/organisms/Modal/Modal';
import { CustomModal } from '@/types';
import copy from '@/assets/images/icon-copy-gray.png';
import { Image } from '@/components/atoms/Image/Image';
import { useRef, useState } from 'react';
import { Toast } from '@/components/organisms/Toast/Toast';

const BabyCodeModal = ({ onModalClose, modalOpen }: CustomModal) => {
  const code = '239483';

  const [showToast, setShowToast] = useState<boolean>(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    } catch {
      console.log('복사 실패');
    }
  };

  return (
    <>
      {showToast && <Toast message="아기 코드가 복사되었습니다" />}
      <Modal isOpen={modalOpen} onClose={onModalClose}>
        <BabyCodeModalContainer>
          <Text>초대 코드</Text>
          <BabyCodeWrapper>
            <Text size="headLarge" $fontWeight={700}>
              {code}
            </Text>
            <Image
              src={copy}
              width={1.5}
              height={1.5}
              onClick={handleCopyClick}
            />
          </BabyCodeWrapper>
        </BabyCodeModalContainer>
      </Modal>
    </>
  );
};

export { BabyCodeModal };
