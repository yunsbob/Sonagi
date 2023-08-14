import { styled } from 'styled-components';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(254, 229, 229);
  font-size: 25px;
  height: 50px;
  color: #5d5d5d;
`;
const ContentController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  gap: 15px;
`;

export { AdminContainer, Header, ContentController };
