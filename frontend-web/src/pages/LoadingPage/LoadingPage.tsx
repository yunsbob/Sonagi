import { Background } from '@/components/atoms/Background/Background.styles';
import backgroundGradient from '@/assets/images/background-gradient.png';
import {
  LoadingPageContainer,
  LoadingPageWrapper,
} from '@/pages/LoadingPage/LoadingPage.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import yellowBaby from '@/assets/images/img-baby-yellow-circle.png';

const LoadingPage = () => {
  return (
    <Background $background={backgroundGradient}>
      <LoadingPageContainer>
        <LoadingPageWrapper>
          <Image
            src={yellowBaby}
            width={8}
            style={{ marginBottom: '20px' }}
          ></Image>
          <Text size="medium1">로딩중...</Text>
        </LoadingPageWrapper>
      </LoadingPageContainer>
    </Background>
  );
};

export default LoadingPage;
