import { styled } from 'styled-components';
import theme from '@/styles/theme';

const MemoArea = styled.textarea`
  padding: 1.5rem;
  width: 90%;
  height: 20vh;
  /* background: var(--white-1, #fff); */
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
  font-family: 'Happiness-Sans';
  resize: none;
  border: none;
  background: transparent;
`;

const MemoWrapper = styled.div`
  position: relative; /* Needed for absolute positioning */
  border-radius: 0.5rem;
  background-color: ${theme.color.lightgrey};
  width: 100%;
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-start; /* Align items to the start (left) */
  padding: 1rem; /* Add padding for the word count */
`;

const WordCount = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
  font-size: 1rem;
`;

export { MemoArea, MemoWrapper, WordCount };
