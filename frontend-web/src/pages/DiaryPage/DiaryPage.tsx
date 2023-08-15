import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import WeekendCalendar from '../../components/organisms/WeekendCalendar/WeekendCalendar';
import btnAddDiary from '@/assets/images/btn-add-diary.png';
import { DiaryListContainer } from '@/pages/DiaryPage/DiaryPage.styles';
import { Image } from '@/components/atoms/Image/Image';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/userState';
import { selectedBabyState } from '@/states/babyState';
import DiaryCard from '@/components/organisms/DiaryCard/DiaryCard';
import { BabiesOfUser, User } from '@/types';
import { selectedDateState } from '@/states/dateState';
import { useGetDiaryInfoByBabyId } from '@/apis/Diary/Queries/useGetDiaryInfoByBabyId';
import { DiaryInfo } from '@/types/diaryTypes';

const DiaryPage: React.FC = () => {
  const navigate = useNavigate();
  const userInfo: User = useRecoilValue(userInfoState);
  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);
  const selectedDate: string = useRecoilValue(selectedDateState);

  const diaries: DiaryInfo[] = useGetDiaryInfoByBabyId(
    babyInfo.babyId,
    selectedDate
  );

  return (
    <>
      <CalendarBar></CalendarBar>
      <WeekendCalendar></WeekendCalendar>
      <DiaryListContainer>
        {diaries.map((diary, index) => (
          <DiaryCard
            key={index}
            writer={diary.userName}
            writenDate={diary.writedTime}
            content={diary.content}
            imgUrls={diary.imgUrls}
          ></DiaryCard>
        ))}
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
