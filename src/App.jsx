import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Sidebar } from './components';
import { darkTheme, lightTheme } from './utils/Theme';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 4;
  background-color: ${({ theme }) => theme.soft};
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <h1>Video List</h1>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
