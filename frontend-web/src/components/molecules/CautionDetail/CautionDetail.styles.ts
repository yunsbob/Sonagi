import theme from '@/styles/theme';
import styled from 'styled-components';

const MemoWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background-color: ${theme.color.lightgrey};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 20px;
`;

const MemoArea = styled.textarea`
  padding: 1rem, 0.5rem;
  width: 90%;
  height: 25vh;
  /* background: var(--white-1, #fff); */
  font-size: ${theme.fontSize.medium2};
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
  font-family: 'Happiness-Sans';
  resize: none;
  border: none;
  background: transparent;
`;

const WordCount = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
  font-size: ${theme.fontSize.small};
`;

const Divider = styled.div`
  border-top: 1px solid ${theme.color.gray3};
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;
  box-sizing: border-box;
  width: 100%;
`;

const UpdateButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  button {
    border-radius: 18px;
    height: 48px;
  }
`;

const showTextWrapper = styled.div`
  width: 100%;
  word-wrap: break-word;
`;

export {
  MemoWrapper,
  MemoArea,
  WordCount,
  Divider,
  UpdateButtonWrapper,
  showTextWrapper,
};
