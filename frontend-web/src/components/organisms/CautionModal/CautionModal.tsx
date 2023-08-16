import * as S from '@/components/organisms/CautionModal/CautionModal.styles';
import Modal from '@/components/organisms/Modal/Modal';
import { BabiesOfUser, CustomModal } from '@/types';
import { useRecoilValue } from 'recoil';
import { selectedBabyState } from '@/states/babyState';
import { CautionRecorder } from '@/components/molecules/CautionRecorder/CautionRecorder';
import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import theme from '@/styles/theme';
// import { useGetCaution } from '@/apis/Baby/Queries/useGetCaution';

interface CautionModalProps {
  onModalClose: () => void;
  modalOpen: boolean;
  name?: string;
  memo?: string;
  isDisease: boolean;
}

const CautionModal = ({
  onModalClose,
  modalOpen,
  name,
  memo,
  isDisease,
}: CautionModalProps) => {
  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);
  const buttonHandler = () => {
    onModalClose();
  };

  return (
    <>
      <Modal isOpen={modalOpen} onClose={onModalClose}>
        <S.CautionModalContainer>
          <CautionRecorder
            onModalClose={onModalClose}
            isDisease={isDisease}
          ></CautionRecorder>

          <Text size="medium1">{name}</Text>
          <Text style={{ wordWrap: 'break-word' }} size="medium2">
            {memo}
          </Text>
        </S.CautionModalContainer>
      </Modal>
    </>
  );
};

export { CautionModal };
