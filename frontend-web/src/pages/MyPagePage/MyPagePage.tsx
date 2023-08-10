import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import {
  CoParentContainer,
  CoParentListContainer,
  CoParentWrapper,
  Container,
  SettingContainer,
  UserContainer,
  UserNameWrapper,
} from '@/pages/MyPagePage/MyPagePage.styles';
import family from '@/assets/images/img-family.png';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/UserState';
import Button from '@/components/atoms/Button/Button';
import setting from '@/assets/images/icon-setting-grey.png';
import { inherits } from 'util';
import theme from '@/styles/theme';
import { User } from '@/types';
import deleteIcon from '@/assets/images/icon-delete-red-circle.png';
import { useGetCoParent } from '@/apis/Baby/Queries/useGetCoParent';

const MyPagePage = () => {
  const userInfo: User = useRecoilValue(userInfoState);
  // TODO: 현재선택된 babyId로 변경하기
  const coparents = useGetCoParent(userInfo.userId, 5);

  const profileColor: string[] = ['red', 'green', 'blue'];
  return (
    <Container>
      <UserContainer>
        <Image src={family} width={5} height={5} />
        <UserNameWrapper>
          <Text size="medium2" color={theme.color.black3}>
            환영합니다
          </Text>
          <Text size="headSmall" color={theme.color.black3}>
            <b>{userInfo.name}</b>님.
          </Text>
        </UserNameWrapper>
        <Button option="default" size="xSmall">
          <Image src={setting} width={1} />
          <Text size="small">정보 수정</Text>
        </Button>
      </UserContainer>
      <CoParentContainer>
        <Text size="medium1">공동 양육자 관리</Text>
        <CoParentListContainer>
          {coparents.map((coparent, idx) => {
            return (
              <CoParentWrapper key={coparent.userId}>
                <Image
                  className="delete"
                  src={deleteIcon}
                  height={30}
                  $unit="%"
                />
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
            />
            <Text size="medium3" color={theme.color.blue}>
              추가하기
            </Text>
          </CoParentWrapper>
        </CoParentListContainer>
      </CoParentContainer>
      <SettingContainer>
        <Text size="medium1">우리 아이 추가하기</Text>
        <Text size="medium1">알림 설정</Text>
        <Text size="medium1">앨범 생성하기</Text>
        <Text size="medium1">로그아웃</Text>
        <Text size="medium1">자주 묻는 질문(FAQ)</Text>
        <Text size="medium1">문의하기</Text>
        <Text size="medium1">탈퇴하기</Text>
      </SettingContainer>
    </Container>
  );
};

export default MyPagePage;
