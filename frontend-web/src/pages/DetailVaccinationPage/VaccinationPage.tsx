import { VaccinationContainer } from './VaccinationPage.styles';
import VaccinationContent from '@/components/molecules/VaccinationContent/VaccinationContent';

interface VaccinationProps {
  vaccinationId: number;
}

const VaccinationPage = ({ vaccinationId }: VaccinationProps) => {
  return (
    <VaccinationContainer>
      <VaccinationContent></VaccinationContent>
    </VaccinationContainer>
  );
};

export default VaccinationPage;
