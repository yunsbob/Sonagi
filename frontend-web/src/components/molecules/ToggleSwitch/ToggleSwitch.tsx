import { StyledLabel } from '@/components/molecules/ToggleSwitch/ToggleSwitch.styles';
import { ChangeEvent, useState } from 'react';

interface ToggleSwitchProps {
  switchState: boolean;
  setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const ToggleSwitch = ({
  switchState,
  setSwitchState,
  id,
}: ToggleSwitchProps) => {
  const onToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('---', e.target.checked);
    setSwitchState(e.target.checked);
  };

  return (
    <StyledLabel htmlFor={id} checked={switchState}>
      <input
        id={id}
        type="checkbox"
        checked={switchState}
        onChange={onToggleChange}
      />
    </StyledLabel>
  );
};

export { ToggleSwitch };
