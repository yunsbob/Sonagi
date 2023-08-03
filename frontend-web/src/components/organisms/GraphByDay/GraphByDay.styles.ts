import { styled } from 'styled-components';

interface CardStyleProp {
  $borderColor: string;
}

const GrapByDayContainer = styled.div`
  /* height: fit-content; */
  /* display: flex; */

  /* flex-direction: column; */
  /* width: 80vw; */
  /* margin: 0px auto; */
  width: 100vw;
  /* align-items: center; */
`;

const DonutGraphContainer = styled.div`
  width: 90vw;
  height: 90vw;
  background-color: red;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  /* display: block; */
`;

const CardContainer = styled.div<CardStyleProp>`
  width: 85vw;
  height: 60vw;
  border: 1.5px solid ${props => props.$borderColor};
  margin-bottom: 30px;
  background-color: white;

  margin-left: auto;
  margin-right: auto;
  border-radius: 11px;
  /* display: block; */
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
`;

export { GrapByDayContainer, DonutGraphContainer, CardContainer };
