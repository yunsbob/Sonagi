import Modal from '@/components/organisms/Modal/Modal';

interface CheckBabyModalProps {
  onModalClose: () => void;
}

const CheckBabyModal = ({ onModalClose }: CheckBabyModalProps) => {
  return (
    <Modal height={22} onClose={onModalClose}>
      <p>아이 정보를 확인해주세요</p>
      <p>아이 이름: </p>
      <p>아이 생년월일 : </p>
    </Modal>
  );
};

export default CheckBabyModal;
