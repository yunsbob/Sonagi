import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import grayCheck from '@/assets/images/img-check-grey.png';
import blueCheck from '@/assets/images/img-check-blue.png';
import { useState } from 'react';
import theme from '@/styles/theme';

const VaccineButton = () => {
  const [isDone, setIsDone] = useState(false);
  const [isMoment, setIsMoment] = useState(true);

  const fontColorHandler = () => {
    if (isDone && isMoment) {
      return theme.color.blue1;
    } else if (!isDone && isMoment) {
      return theme.color.red1;
    } else {
      return theme.color.gray5;
    }
  };

  const onClickHandler = () => {
    setIsDone(!isDone);
  };

  return (
    <div style={{ display: 'flex' }} onClick={onClickHandler}>
      <Image
        style={{ marginRight: '15px' }}
        width={1.2}
        height={1.2}
        // $unit="px"
        src={isDone ? blueCheck : grayCheck}
      ></Image>
      <div>
        <Text size="headSmall">결핵</Text>
        <Text size="medium1">BCG 경구용 1차 / 1차</Text>
        <Text color={fontColorHandler} size="medium3">
          접종일: 2023.08.08{' '}
        </Text>
      </div>
    </div>
  );
};

export default VaccineButton;
