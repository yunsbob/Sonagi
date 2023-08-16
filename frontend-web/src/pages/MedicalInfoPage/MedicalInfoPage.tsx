import { useRecoilValue } from 'recoil';
import { useEffect, useRef, useState } from 'react';
import BabyMedicalCheckStatusList from '@/components/organisms/BabyMedicalStatusList/BabyMedicalCheckStatusList/BabyMedicalCheckStatusList';
import BabyVaccinationStatusList from '@/components/organisms/BabyMedicalStatusList/BabyVaccinationStatusList/BabyVaccinationStatusList';
import { selectedBabyState } from '@/states/babyState';
import { BabiesOfUser } from '@/types';
import { useGetVaccination } from '@/apis/Baby/Queries/useGetVaccination';
import { useGetMedicalCheck } from '@/apis/Baby/Queries/useGetMedicalCheck';
import {
  DividerLine,
  MedicalInfoContainer,
  MedicalInfoImage,
  MedicalInfoImageContainer,
  MedicalStatusWrapper,
} from './MedicalInfoPage.styles';
import toggleLeft from '@/assets/images/btn-toggle-left-activated.png';
import toggleRight from '@/assets/images/btn-toggle-right-activated.png';
import Back from '@/components/atoms/Back/Back';
import { Image } from '@/components/atoms/Image/Image';

const MedicalInfoPage = () => {
  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);
  const vaccinationList = useGetVaccination(babyInfo.babyId);
  const medicalCheckList = useGetMedicalCheck(babyInfo.babyId);

  const [medicalFlag, setMedicalFlag] = useState(true);
  const imageSrc = medicalFlag ? toggleLeft : toggleRight;

  const clickImage = () => {
    setMedicalFlag(!medicalFlag);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const savedScrollTop = localStorage.getItem('scrollPosition');
    if (container && savedScrollTop) {
      container.scrollTop = Number(savedScrollTop);
    }
  });

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const onScroll = () => {
        localStorage.setItem('scrollPosition', String(container.scrollTop));
      };

      container.addEventListener('scroll', onScroll);
      return () => {
        container.removeEventListener('scroll', onScroll);
      };
    }
  });

  return (
    <MedicalInfoContainer>
      <Back>예방접종 / 검진</Back>
      <MedicalInfoImageContainer>
        <DividerLine></DividerLine>
        <MedicalInfoImage>
          <Image src={imageSrc} width={12.5} height={2} onClick={clickImage} />
        </MedicalInfoImage>
      </MedicalInfoImageContainer>
      {medicalFlag && (
        <MedicalStatusWrapper>
          <BabyVaccinationStatusList vaccinationData={vaccinationList} />
        </MedicalStatusWrapper>
      )}
      {!medicalFlag && (
        <MedicalStatusWrapper>
          <BabyMedicalCheckStatusList medicalCheckData={medicalCheckList} />
        </MedicalStatusWrapper>
      )}
    </MedicalInfoContainer>
  );
};

export default MedicalInfoPage;
