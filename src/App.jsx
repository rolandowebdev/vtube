import styled from 'styled-components';
import { Sidebar } from './components';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 4;
  background-color: #181818;
`;

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <h1>Video List</h1>
      </Main>
    </Container>
  );
};

export default App;
