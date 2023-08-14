import { styled } from 'styled-components';

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FAQListContainer = styled.div`
  margin: 0 40px;
  th {
    text-align: left;
    border-bottom: 2px solid #ffcaca;
    color: #5d5d5d;
  }
  td,
  th {
    padding: 1em 0.5em;
  }
  td {
    border-bottom: 1px solid #e1e1e1;
    text-decoration: none;
  }
  a:link {
    text-decoration: none;
  }
`;
const FAQContentContainer = styled.div`
  padding: 1em 0.5em;
  input,
  textarea {
    border: none;
  }
  input {
    font-weight: bold;
    font-size: 20px;
  }
  textarea {
    font-size: 15px;
    width: 100%;
    min-height: 150px;
  }
`;
const FAQDetailTitle = styled.div`
  text-align: left;
  border-bottom: 2px solid #ffcaca;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 5px;
`;
const FAQDetailContent = styled.div`
  font-size: 15px;
  margin-top: 10px;
  min-height: 150px;
`;
const FAQButton = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 1rem;

  font-size: 1rem;
  font-weight: 400;
  border-radius: 5px;
  border: 2px solid pink;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export {
  FAQContainer,
  FAQListContainer,
  FAQContentContainer,
  FAQDetailTitle,
  FAQDetailContent,
  FAQButton,
  ButtonContainer,
};
