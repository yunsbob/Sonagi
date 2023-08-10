import { useGetCoParent } from '@/apis/Baby/Queries/useGetCoParent';
import { Image } from '@/components/atoms/Image/Image';
import {
  CoParentListContainer,
  CoParentWrapper,
} from '@/components/organisms/CoparentList/CoparentList.styles';
import { userInfoState } from '@/states/UserState';
import { User } from '@/types';
import { useRecoilValue } from 'recoil';
import deleteIcon from '@/assets/images/icon-delete-red-circle.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import { useState } from 'react';
import { BabyCodeModal } from '@/components/organisms/BabyCodeModal/BabyCodeModal';
import { Toast } from '@/components/organisms/Toast/Toast';

const CoparentList = () => {
  const userInfo: User = useRecoilValue(userInfoState);
  // TODO: 현재선택된 babyId로 변경하기
  const coparents = useGetCoParent(userInfo.userId, 5);

  const profileColor: string[] = ['red', 'green', 'blue'];

  // 공동 양육자 초대
  const [coparentModalOpen, setCoparentModalOpen] = useState(false);

  const modalClose = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setState(false);
  };

  return (
    <CoParentListContainer>
      <BabyCodeModal
        onModalClose={() => modalClose(setCoparentModalOpen)}
        modalOpen={coparentModalOpen}
      />

      {coparents.map((coparent, idx) => {
        return (
          <CoParentWrapper key={coparent.userId}>
            <Image className="delete" src={deleteIcon} height={30} $unit="%" />
            <Image
              src={require(`@/assets/images/icon-user-${
                profileColor[idx % 3]
              }.png`)}
              height={80}
              $unit="%"
            />
            <Text size="medium3">{coparent.name}</Text>
          </CoParentWrapper>
        );
      })}

      <CoParentWrapper>
        <Image
          src={require('@/assets/images/icon-plus-blue-circle-dash.png')}
          height={80}
          $unit="%"
          onClick={() => setCoparentModalOpen(true)}
        />
        <Text size="medium3" color={theme.color.blue}>
          추가하기
        </Text>
      </CoParentWrapper>
    </CoParentListContainer>
  );
};

export { CoparentList };
