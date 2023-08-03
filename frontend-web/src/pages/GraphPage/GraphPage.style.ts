import { styled } from 'styled-components';

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* width: 80vw; */
  /* margin-left: auto;
  margin-right: auto; */
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  gap: 15px;
  margin-bottom: 10px;
`;

export { GraphContainer, ToggleContainer };
