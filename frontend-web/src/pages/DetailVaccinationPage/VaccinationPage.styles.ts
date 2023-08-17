import { styled } from 'styled-components';

const VaccinationContainer = styled.div`
  height: calc(100% - 52px);
  width: 100%;
  background-color: ${({ theme }) => theme.color.white1};
  display: flex;
  flex-direction: column;
`;

export { VaccinationContainer };
