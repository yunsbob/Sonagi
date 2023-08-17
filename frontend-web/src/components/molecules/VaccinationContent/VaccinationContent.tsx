import React from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Vaccination } from '@/types';
import {
  CalendarButton,
  VaccinationContentWrapper,
} from './VaccinationContent.styles';
import Button from '@/components/atoms/Button/Button';
import theme from '@/styles/theme';
import calendarImg from '@/assets/images/icon-calendar-blue.png';
import { Image } from '@/components/atoms/Image/Image';

interface BabyVaccintaionProps {
  vaccinationData: Vaccination;
}

const VaccinationContent = ({ vaccinationData }: BabyVaccintaionProps) => {
  const formattedContent1 = vaccinationData.content1
    .split('\n')
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  const formattedContent2 = vaccinationData.content2
    .split('\n')
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  const formattedContent3 = vaccinationData.content3
    .split('\n')
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  const formattedContent4 = vaccinationData.content4
    .split('\n')
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  const formattedContent5 = vaccinationData.content5
    .split('\n')
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  const formattedContent6 = vaccinationData.content6
    .split('\n')
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <>
      <VaccinationContentWrapper>
        <Text
          size="headSmall"
          $fontWeight={900}
          style={{ marginBottom: '7px' }}
        >
          {vaccinationData.disease}
        </Text>
        <CalendarButton>
          <Text size="medium3" style={{ marginBottom: '15px' }}>
            권장일: {vaccinationData.startDate} ~ {vaccinationData.endDate}
            &nbsp;&nbsp;
          </Text>
          <Button
            size="xSmall"
            $backgroundColor={theme.color.gray4}
            $border="none"
            style={{ height: '24px', marginTop: '1px' }}
          >
            <Text
              size="small"
              $fontWeight={400}
              color={theme.color.medicalblue}
            >
              접종일 등록 &nbsp;
            </Text>
            <Image src={calendarImg} height={1}></Image>
          </Button>
        </CalendarButton>
      </VaccinationContentWrapper>
      <VaccinationContentWrapper>
        <Text
          size="headSmall"
          $fontWeight={900}
          style={{ marginBottom: '7px', marginTop: '7px' }}
        >
          {vaccinationData.title1}
        </Text>
        <Text size="medium2" style={{ marginBottom: '15px' }}>
          {formattedContent1}
        </Text>
      </VaccinationContentWrapper>
      <VaccinationContentWrapper>
        <Text
          size="headSmall"
          $fontWeight={900}
          style={{ marginBottom: '7px', marginTop: '7px' }}
        >
          {vaccinationData.title2}
        </Text>
        <Text size="medium2" style={{ marginBottom: '15px' }}>
          {formattedContent2}
        </Text>
      </VaccinationContentWrapper>
      <VaccinationContentWrapper>
        <Text
          size="headSmall"
          $fontWeight={900}
          style={{ marginBottom: '7px', marginTop: '7px' }}
        >
          {vaccinationData.title3}
        </Text>
        <Text size="medium2" style={{ marginBottom: '15px' }}>
          {formattedContent3}
        </Text>
      </VaccinationContentWrapper>
      <VaccinationContentWrapper>
        <Text
          size="headSmall"
          $fontWeight={900}
          style={{ marginBottom: '7px', marginTop: '7px' }}
        >
          {vaccinationData.title4}
        </Text>
        <Text size="medium2" style={{ marginBottom: '15px' }}>
          {formattedContent4}
        </Text>
      </VaccinationContentWrapper>
      <VaccinationContentWrapper>
        <Text
          size="headSmall"
          $fontWeight={900}
          style={{ marginBottom: '7px', marginTop: '7px' }}
        >
          {vaccinationData.title5}
        </Text>
        <Text size="medium2" style={{ marginBottom: '15px' }}>
          {formattedContent5}
        </Text>
      </VaccinationContentWrapper>
      <VaccinationContentWrapper>
        <Text
          size="headSmall"
          $fontWeight={900}
          style={{ marginBottom: '7px', marginTop: '7px' }}
        >
          {vaccinationData.title6}
        </Text>
        <Text size="medium2" style={{ marginBottom: '15px' }}>
          {formattedContent6}
        </Text>
      </VaccinationContentWrapper>
    </>
  );
};

export default VaccinationContent;
