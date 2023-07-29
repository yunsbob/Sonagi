import Button from '@/components/atoms/Button/Button';
import type { ComponentPropsWithRef } from 'react';

export interface RegisterFieldProps extends ComponentPropsWithRef<'button'> {
  buttonName: string;
}

const RegisterField = ({ buttonName }: RegisterFieldProps) => (
  <div>
    <Button variant="register" size="small">
      {buttonName}
    </Button>
  </div>
);

export default RegisterField;
