import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Home, SignIn, Video, Search, SignUp } from './pages';
import { Navbar, Sidebar } from './components';

import { Container, Main, Wrapper } from './App.styled';
import { darkTheme, lightTheme } from './utils/theme';
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
                <Route index element={<Home type="random" />} />
                <Route path="trends" element={<Home type="trend" />} />
                <Route path="subscriptions" element={<Home type="sub" />} />
                <Route path="search" element={<Search />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
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
