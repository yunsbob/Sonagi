import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { CalendarBarContainer } from '@/components/molecules/CalendarBar/CalendarBar.style';
import iconArrowMiniLeftGrey from '@/assets/images/icon-arrow-mini-left-grey.png';
import iconArrowMiniRightGrey from '@/assets/images/icon-arrow-mini-right-grey.png';

function CalendarBar() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <CalendarBarContainer>
      <Image src={iconArrowMiniLeftGrey} width={1.3} height={1.3}></Image>
      <Text size="medium1" style={{ margin: '0px 10px' }}>
        {year}년 {month}월 {day}일
      </Text>
      <Image src={iconArrowMiniRightGrey} width={1.3} height={1.3}></Image>
    </CalendarBarContainer>
  );
}

export default CalendarBar;
