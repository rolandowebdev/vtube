import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Home, SignIn, Video } from './pages';
import { Navbar, Sidebar } from './components';

import { Container, Main, Wrapper } from './App.styled';
import { darkTheme, lightTheme } from './utils/Theme';
import { useThemeModeContext } from './components/ThemeModeProvider/ThemeModeProvider';

const App = () => {
  const themeMode = useThemeModeContext();
  return (
    <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
      <Container>
        <Sidebar />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="signin" element={<SignIn />} />
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
