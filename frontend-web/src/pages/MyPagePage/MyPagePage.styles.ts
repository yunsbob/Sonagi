import { styled } from 'styled-components';

const Container = styled.div`
  height: calc(100% - 52px);
  width: 100%;
  background-color: ${({ theme }) => theme.color.white1};
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const UserContainer = styled.div`
  /* flex-grow: 1; */
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  height: 20%;

  button {
    img {
      margin-right: 10px;
    }
  }
`;

const UserNameWrapper = styled.div`
  position: absolute;
  left: 7.3rem;
`;

const CoParentContainer = styled.div`
  /* flex-grow: 1.3; */
  height: 25%;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3vh 0px;
`;

const CoParentListContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  gap: 10px;
  padding-top: 3vh;
`;

const CoParentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  position: relative;

  .delete {
    position: absolute;
    right: -5px;
    top: -5px;
  }
`;

const SettingContainer = styled.div`
  height: 50%;
  padding: 3vh 0px;
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

export {
  Container,
  UserContainer,
  UserNameWrapper,
  CoParentContainer,
  CoParentListContainer,
  CoParentWrapper,
  SettingContainer,
};
