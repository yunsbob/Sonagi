import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import { AmountButtonWrapper } from '@/components/molecules/AmountRecorder/AmountRecorder.style';
import { useState } from 'react';

export interface AmountRecorderProps {
  type?: string;
}

const AmountRecorder = ({ type }: AmountRecorderProps) => {
  const [isTemperature, setIsTemperature] = useState(true);
  const [temperature, setTemperature] = useState<number>(365);
  const [amount, setAmount] = useState<number>(100);

  const amountSetArray = [-20, -10, -5, +5, +10, +20];
  const temperatureSetArray = [-1, -0.5, -0.1, +0.1, +0.5, +1];

  const setArray = isTemperature ? temperatureSetArray : amountSetArray;

  const recorderTitle = type;
  const recorderLabel = isTemperature ? '온도, ℃' : '용량, mL';

  return (
    <>
      <Text size="medium1">{recorderTitle}</Text>
      <Text size="headSmall">{recorderLabel}</Text>
      <Text size="headLarge">{isTemperature ? temperature / 10 : amount}</Text>
      <AmountButtonWrapper>
        {setArray.map((record, index) => (
          <Button
            option="primary"
            key={index}
            size="small"
            onClick={() => {
              if (isTemperature) {
                if (temperature + record * 10 >= 350) {
                  setTemperature(temperature + record * 10);
                } else {
                  setTemperature(350);
                }
              } else {
                if (amount + record >= 0) {
                  setAmount(amount + record);
                } else {
                  setAmount(0);
                }
              }
            }}
          >
            {record}
          </Button>
        ))}
      </AmountButtonWrapper>
    </>
  );
};

export default AmountRecorder;
