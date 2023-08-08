import { Text } from '@/components/atoms/Text/Text.styles';
import {
  Container,
  LineContainer,
  Line,
  BarContainer,
  Wrapper,
  DiaperBar,
  DateContainer,
  CategoryContainer,
  CategoryWrapper,
  CategoryCircle,
} from '@/components/molecules/BarChart/Diaper/DiaperBarGraph.styles';
import theme from '@/styles/theme';

const DiaperBarGraph = () => {
  // 10개의 line
  // let lines: JSX.Element[] = [];

  // for (let i = 0; i < 9; i++) {
  //   lines = [...lines, <Line key={i} />];
  // }

  const lineLen = 9;
  const percent100 = (100 - 100 / lineLen) / 100;

  // const times = [0, 3, 9, 12, 15, 18, 21, 24];

  return (
    <Container>
      <LineContainer>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <Text size="xSmall" width={10}>
            0
          </Text>
          <Line />
        </div>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <Text size="xSmall" width={10}>
            3
          </Text>
          <Line />
        </div>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <Text size="xSmall" width={10}>
            6
          </Text>
          <Line />
        </div>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <Text size="xSmall" width={10}>
            9
          </Text>
          <Line />
        </div>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <Text size="xSmall" width={10}>
            12
          </Text>
          <Line />
        </div>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <Text size="xSmall" width={10}>
            15
          </Text>
          <Line />
        </div>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <Text size="xSmall" width={10}>
            18
          </Text>
          <Line />
        </div>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <Text size="xSmall" width={10}>
            21
          </Text>
          <Line />
        </div>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'right',
          }}
        >
          <Text size="xSmall" width={10}>
            24
          </Text>
          <Line />
        </div>
        <div
          style={{
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text size="xSmall"></Text>
          <Line />
        </div>
      </LineContainer>

      <BarContainer>
        <Wrapper $barHeight={percent100 * 70}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 60}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 100}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 50}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 80}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 90}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </Wrapper>
        <Wrapper $barHeight={percent100 * 30}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
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
          <CategoryCircle $bgColor={theme.color.graphPoop} />
          <Text size="xSmall">대변</Text>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryCircle $bgColor={theme.color.graphPee} />
          <Text size="xSmall">소변</Text>
        </CategoryWrapper>
      </CategoryContainer>
    </Container>
  );
};

export { DiaperBarGraph };
