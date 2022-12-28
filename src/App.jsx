import styled from 'styled-components';
import Menu from './components/Menu/Menu';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 4;
  background-color: #181818;
`;

const Wrapper = styled.div``;

const App = () => {
  return (
    <Container>
      <Menu />
      <Main>
        <Wrapper>
          <h1>Video List</h1>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default App;
