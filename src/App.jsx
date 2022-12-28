import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { darkTheme, lightTheme } from './utils/Theme';

import { Home, Video } from './pages';
import { Sidebar, Navbar } from './components';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 4;
  background-color: ${({ theme }) => theme.soft};
`;

const Wrapper = styled.div``;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
