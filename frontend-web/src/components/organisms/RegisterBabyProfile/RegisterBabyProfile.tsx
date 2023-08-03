import GenderButtons from '@/components/molecules/GenderButtons/GenderButtons';
import { useState, ChangeEvent, useEffect } from 'react';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import theme from '@/styles/theme';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import moment from 'moment';
import { CalendarModal } from '@/components/organisms/CalendarModal/CalendarModal';
import RBPWrapper from '@/components/organisms/RegisterBabyProfile/RegisterBabyProfile.style';

const RegisterBabyProfile = () => {
  const placeholder = '이름을 입력하세요';

  const [value, setValue] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>(theme.color.gray3);

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
  return (
    <RBPWrapper>
      {modalOpen && (
        <CalendarModal
          pickDate={pickDate}
          onModalClose={onModalClose}
          onCalendarChange={onCalendarChange}
        />
      )}
      <GenderButtons />
      <Button
        option="default"
        size="large"
        style={{ fontSize: theme.fontSize.large, color: theme.color.black3 }}
        onClick={onClickAction}
      >
        {moment(pickDate).format('YYYY년 MM월 D일')}
      </Button>
      <Input
        onChange={changeInput}
        value={value}
        placeholder={placeholder}
        fontSize={theme.fontSize.large}
        height={3.5}
      />
    </RBPWrapper>
  );
};

export default RegisterBabyProfile;
