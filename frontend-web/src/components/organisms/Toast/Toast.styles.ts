import { styled } from 'styled-components';

const ToastContainer = styled.div`
  width: max-content;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  background: ${({ theme }) => theme.color.black5};

  animation: fadein 2s linear forwards;
  -moz-animation: fadein 2s linear forwards;
  -webkit-animation: fadein 2s linear forwards;

  animation: fadeout 2s linear forwards;
  -moz-animation: fadeout 2s linear forwards;
  -webkit-animation: fadeout 2s linear forwards;
`;

export { ToastContainer };
