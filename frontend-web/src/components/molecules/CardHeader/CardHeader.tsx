import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { CardHeaderWrapper } from '@/components/molecules/CardHeader/CardHeader.style';

interface CardHeaderProps {
  text: string;
  imgSrc: string;
}

const CardHeader = ({ text, imgSrc }: CardHeaderProps) => {
  const src = `@/assets/images/img-${imgSrc}.png`;

  return (
    <CardHeaderWrapper>
      <Text size="headSmall">{text}</Text>
      <Image src={imgSrc} width={2} />
    </CardHeaderWrapper>
  );
};

export { CardHeader };
