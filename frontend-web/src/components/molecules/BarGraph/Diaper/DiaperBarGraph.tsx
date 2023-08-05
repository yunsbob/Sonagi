import { Text } from '@/components/atoms/Text/Text.styles';
import {
  DiaperBarGraphContainer,
  DiaperBarGraphLineContainer,
  DiaperBarGraphLine,
  DiaperBarGraphBarContainer,
  DiaperBarGraphWrapper,
  DiaperBar,
  DiaperBarGraphTime,
  // DiaperBarGraphLineAndText,
  DiaperBarGraphDateContainer,
  DiaperBarGraphCategoryContainer,
  DiaperBarGraphCategoryWrapper,
  DiaperBarGraphCategoryCircle,
} from '@/components/molecules/BarGraph/Diaper/DiaperBarGraph.styles';
import theme from '@/styles/theme';

const DiaperBarGraph = () => {
  // 10개의 line
  // let lines: JSX.Element[] = [];

  // for (let i = 0; i < 9; i++) {
  //   lines = [...lines, <DiaperBarGraphLine key={i} />];
  // }

  const lineLen = 9;
  const percent100 = (100 - 100 / lineLen) / 100;

  const times = [0, 3, 9, 12, 15, 18, 21, 24];

  return (
    <DiaperBarGraphContainer>
      {/* <DiaperBarGraphTime> */}
      {/* <Text size="xSmall">0</Text> */}
      {/* </DiaperBarGraphTime> */}

      <DiaperBarGraphLineContainer>
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
          <DiaperBarGraphLine />
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
          <DiaperBarGraphLine />
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
          <DiaperBarGraphLine />
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
          <DiaperBarGraphLine />
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
          <DiaperBarGraphLine />
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
          <DiaperBarGraphLine />
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
          <DiaperBarGraphLine />
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
          <DiaperBarGraphLine />
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
          <DiaperBarGraphLine />
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
          <DiaperBarGraphLine />
        </div>
      </DiaperBarGraphLineContainer>

      <DiaperBarGraphBarContainer>
        <DiaperBarGraphWrapper $barHeight={percent100 * 70}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </DiaperBarGraphWrapper>
        <DiaperBarGraphWrapper $barHeight={percent100 * 60}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </DiaperBarGraphWrapper>
        <DiaperBarGraphWrapper $barHeight={percent100 * 100}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </DiaperBarGraphWrapper>
        <DiaperBarGraphWrapper $barHeight={percent100 * 50}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </DiaperBarGraphWrapper>
        <DiaperBarGraphWrapper $barHeight={percent100 * 80}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </DiaperBarGraphWrapper>
        <DiaperBarGraphWrapper $barHeight={percent100 * 90}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </DiaperBarGraphWrapper>
        <DiaperBarGraphWrapper $barHeight={percent100 * 30}>
          <DiaperBar height={50} color={theme.color.graphFeeding} />
          <DiaperBar height={50} color={theme.color.graphInfantFormula} />
          <DiaperBar height={50} color={theme.color.graphBreastFeeding} />
          <DiaperBar height={50} color={theme.color.graphBabyFood} />
          <DiaperBar height={50} color={theme.color.graphSnack} />
          <DiaperBar height={50} color={theme.color.graphMilk} />
        </DiaperBarGraphWrapper>
      </DiaperBarGraphBarContainer>
      <DiaperBarGraphDateContainer>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/26
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/27
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/28
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/29
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/30
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          12/31
        </Text>
        <Text style={{ width: '35px', textAlign: 'center' }} size="xSmall">
          1/1
        </Text>
      </DiaperBarGraphDateContainer>
      <DiaperBarGraphCategoryContainer>
        <DiaperBarGraphCategoryWrapper>
          <DiaperBarGraphCategoryCircle $bgColor={theme.color.graphPoop} />
          <Text size="xSmall">대변</Text>
        </DiaperBarGraphCategoryWrapper>
        <DiaperBarGraphCategoryWrapper>
          <DiaperBarGraphCategoryCircle $bgColor={theme.color.graphPee} />
          <Text size="xSmall">소변</Text>
        </DiaperBarGraphCategoryWrapper>
      </DiaperBarGraphCategoryContainer>
    </DiaperBarGraphContainer>
  );
};

export { DiaperBarGraph };
