import styled from 'styled-components';

const OurBabyInfoContainer = styled.div`
  /* border-top: 2px dashed ${({ theme }) => theme.color.white1}; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin-top: 30px; */
  padding-top: 30px;
  gap: 15px;
`;

const UpperButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  /* border-bottom: 2px dashed ${({ theme }) => theme.color.white1}; */
`;

const UpperButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  gap: 10px;
  /* gap: 20px; */
  /* border-bottom: 2px dashed ${({ theme }) => theme.color.white1}; */
  /* padding: 10px, 0px; */
`;

const ButtonsDivider = styled.div`
  border-top: 2px dashed ${({ theme }) => theme.color.white1};
  width: 100%;
`;

const BabyNameWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const InfoEditWrapper = styled.div`
  border-top: 2px dashed ${({ theme }) => theme.color.white1};
  display: flex;
  justify-content: end;
  /* align-items: center; */
  padding: 16px;
  position: absolute;
  width: 100%;
`;
export {
  OurBabyInfoContainer,
  UpperButtonWrapper,
  BabyNameWrapper,
  InfoEditWrapper,
  ButtonsDivider,
  UpperButtonContainer,
};
