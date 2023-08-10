import { Text } from '@/components/atoms/Text/Text.styles';
import { ToastContainer } from '@/components/organisms/Toast/Toast.styles';
import ToastPortal from '@/components/organisms/ToastPortal/ToastPortal';
import theme from '@/styles/theme';

interface ToastProps {
  message: string;
}

const Toast = ({ message }: ToastProps) => {
  return (
    <ToastPortal>
      <ToastContainer>
        <Text size="medium3" color={theme.color.black3}>
          {message}
        </Text>
      </ToastContainer>
    </ToastPortal>
  );
};

export { Toast };
