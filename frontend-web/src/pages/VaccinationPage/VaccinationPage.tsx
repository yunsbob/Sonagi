import Back from '@/components/atoms/Back/Back';
import VaccineButton from '@/components/molecules/VaccineButton/VaccineButton';

const VaccinationPage = () => {
  return (
    <>
      <Back>예방접종 상세</Back>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '80px',
        }}
      >
        <VaccineButton></VaccineButton>
      </div>
    </>
  );
};

export default VaccinationPage;
