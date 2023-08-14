import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import WeekendCalendar from '../../components/organisms/WeekendCalendar/WeekendCalendar';
import btnAddDiary from '@/assets/images/btn-add-diary.png';
import { DiaryListContainer } from '@/pages/DiaryPage/DiaryPage.styles';
import { Image } from '@/components/atoms/Image/Image';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/userState';
import { selectedBabyState } from '@/states/babyState';
import DiaryCard from '@/components/organisms/DiaryCard/DiaryCard';

const DiaryPage: React.FC = () => {
  const navigate = useNavigate();
  const userInfo: User = useRecoilValue(userInfoState);
  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);

  return (
    <>
      <CalendarBar></CalendarBar>
      <WeekendCalendar></WeekendCalendar>
      <DiaryListContainer>
        {/* <DiaryCard></DiaryCard> */}
        <Image
          src={btnAddDiary}
          width={100}
          $unit="%"
          onClick={() => navigate(PATH.DIARYREGISTER)}
        ></Image>
      </DiaryListContainer>
    </>
  );
};

export default DiaryPage;
