import GenderButtons from '@/components/molecules/GenderButtons/GenderButtons';
import { useState, ChangeEvent, useEffect } from 'react'; // UserState에 접근하여 userId를 가져오기 위해 useContext 사용
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import theme from '@/styles/theme';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import moment from 'moment';
import { CalendarModal } from '@/components/organisms/CalendarModal/CalendarModal';
import RBPWrapper from '@/components/organisms/RegisterBabyProfile/RegisterBabyProfile.style';

import { useAddBaby } from '@/apis/Baby/Mutations/useAddBaby';
import { userInfoState } from '@/states/UserState';
import { useRecoilState } from 'recoil';
import { Baby } from '@/types';
// TODO: 아가 정보들을 user처럼 state에 저장해야한다

interface RegisterBabyProfileProps {
  onRegister: (baby: Baby | null) => void;
  addBabyProfile: () => void;
}

const RegisterBabyProfile: React.FC<RegisterBabyProfileProps> = ({
  onRegister,
}) => {
  // 상태를 여기에서 관리
  const [baby, setBaby] = useState<Baby | null>(null);
  const placeholder = '이름을 입력하세요';

  const [value, setValue] = useState<string>(''); // input의 value
  const [bgColor, setBgColor] = useState<string>(theme.color.gray3);

  const { mutate } = useAddBaby();
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [userInfo, setUserInfo] = useRecoilState(userInfoState); // userInfo.name을 가져다쓸것

  useEffect(() => {
    if (value.length > 0) {
      setBgColor(theme.gradient.orangeBtn);
    } else {
      setBgColor(theme.color.gray3);
    }
  }, [value]);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const today = new Date();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [pickDate, setPickDate] = useState<Date>(today);

  const onClickAction = () => {
    setModalOpen(true);
  };

  const onCalendarChange = (value: Value) => {
    if (value instanceof Date) {
      setPickDate(value);
    }
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  const addBabyProfile = () => {
    const baby: Baby = {
      birthDate: moment(pickDate).format('YYYY-MM-DD'),
      gender: gender,
      name: value,
      userId: userInfo.id, // this assumes that you have the userId stored in a context or similar state management
    };

    console.log(baby);
    setBaby(baby);
  };

  useEffect(() => {
    onRegister(baby);
  }, [baby, onRegister]);

  return (
    <RBPWrapper>
      {modalOpen && (
        <CalendarModal
          pickDate={pickDate}
          onModalClose={onModalClose}
          onCalendarChange={onCalendarChange}
        />
      )}
      <GenderButtons gender={gender} setGender={setGender} />
      <Button
        option="default"
        size="large"
        $borderRadius="14px"
        onClick={onClickAction}
      >
        {moment(pickDate).format('YYYY년 MM월 D일')}
      </Button>
      <Input
        onChange={changeInput}
        value={value}
        placeholder={placeholder}
        $borderRadius={14}
        fontSize={theme.fontSize.headSmall}
        height={3.5}
      />
    </RBPWrapper>
  );
};

export default RegisterBabyProfile;
