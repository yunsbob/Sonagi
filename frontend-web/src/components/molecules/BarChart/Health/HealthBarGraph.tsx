import { Text } from '@/components/atoms/Text/Text.styles';
import {
  Container,
  LineContainer,
  LineWrapper,
  Line,
  BarContainer,
  Wrapper,
  HealthBar,
  FeverWrapper,
  DateContainer,
  CategoryContainer,
  CategoryWrapper,
  CategoryCircle,
} from '@/components/molecules/BarChart/Health/HealthBarGraph.styles';
import theme from '@/styles/theme';

const HealthBarGraph = () => {
  // 10개의 line
  // let lines: JSX.Element[] = [];

  // for (let i = 0; i < 9; i++) {
  //   lines = [...lines, <Line key={i} />];
  // }

  // const lineLen = 5;
  // const percent100 = (100 - 100 / lineLen) / 100;

  // const times = [0, 3, 9, 12, 15, 18, 21, 24];

  // 최대 횟수에 따라 선의 개수가 달라짐
  const maxCnt = 8;

  return (
    <Container>
      <LineContainer>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            4
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            3
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            2
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            1
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}>
            0
          </Text>
          <Line />
        </LineWrapper>
        <LineWrapper>
          <Text size="xSmall" width={10}></Text>
          <Line />
        </LineWrapper>
      </LineContainer>

      <BarContainer>
        <Wrapper $barHeight={(100 / 4) * 4}>
          <HealthBar height={100} color={theme.color.graphHospital} />
          <HealthBar height={100} color={theme.color.graphHospital} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <FeverWrapper>
            <Text size="xSmall">36.4℃</Text>
          </FeverWrapper>
        </Wrapper>
        <Wrapper $barHeight={(100 / 4) * 3}>
          <HealthBar height={100} color={theme.color.graphHospital} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <FeverWrapper>
            <Text size="xSmall">36.4℃</Text>
          </FeverWrapper>
        </Wrapper>
        <Wrapper $barHeight={(100 / 4) * 2}>
          <HealthBar height={100} color={theme.color.graphHospital} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <FeverWrapper>
            <Text size="xSmall">36.4℃</Text>
          </FeverWrapper>
        </Wrapper>
        <Wrapper $barHeight={(100 / 4) * 3}>
          <HealthBar height={100} color={theme.color.graphHospital} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <FeverWrapper>
            <Text size="xSmall">36.4℃</Text>
          </FeverWrapper>
        </Wrapper>
        <Wrapper $barHeight={(100 / 4) * 1}>
          <HealthBar height={100} color={theme.color.graphMedication} />
          <FeverWrapper>
            <Text size="xSmall">36.4℃</Text>
          </FeverWrapper>
        </Wrapper>
        <Wrapper $barHeight={(100 / 4) * 2}>
          <HealthBar height={100} color={theme.color.graphHospital} />
          <HealthBar height={100} color={theme.color.graphHospital} />
          <FeverWrapper>
            <Text size="xSmall">36℃</Text>
          </FeverWrapper>
        </Wrapper>
        <Wrapper $barHeight={(100 / 4) * 4}>
          <HealthBar height={100} color={theme.color.graphHospital} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <HealthBar height={100} color={theme.color.graphMedication} />
          <FeverWrapper>
            <Text size="xSmall">36.4℃</Text>
          </FeverWrapper>
        </Wrapper>
      </BarContainer>
      <DateContainer>
        <Text width={35} size="xSmall">
          12/3
        </Text>
        <Text width={35} size="xSmall">
          12/5
        </Text>
        <Text width={35} size="xSmall">
          12/10
        </Text>
        <Text width={35} size="xSmall">
          3/9
        </Text>
        <Text width={35} size="xSmall">
          12/30
        </Text>
        <Text width={35} size="xSmall">
          12/31
        </Text>
        <Text width={35} size="xSmall">
          1/1
        </Text>
      </DateContainer>
      <CategoryContainer>
        <CategoryWrapper>
          <CategoryCircle
            $bgColor={'tranasparent'}
            $borderColor={theme.color.graphFeverAverage}
          />
          <Text size="xSmall">평균 체온</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphHospital} />
          <Text size="xSmall">병원 진료</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphMedication} />
          <Text size="xSmall">투약</Text>
        </CategoryWrapper>
      </CategoryContainer>
    </Container>
  );
};

export { HealthBarGraph };
