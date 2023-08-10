import { styled } from 'styled-components';

const UserModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    margin: 1.5vh 0px;
  }

  > input {
    margin-bottom: 3vh;
  }
`;

const UdpateButtonWrapper = styled.div`
  display: flex;
  gap: 2vh;

  button {
    border-radius: 18px;
    height: 48px;
  }
`;

export { UserModalContainer, UdpateButtonWrapper };
