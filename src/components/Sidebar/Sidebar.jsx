import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { AccountCircleOutlined, LogoutOutlined } from '@mui/icons-material';

import { useThemeModeUpdateContext } from '../ThemeModeProvider/ThemeModeProvider';
import { Container, Button, Hr, Img, Item, Login, Logo, Title, Wrapper } from './Sidebar.styled';

import {
  logo,
  categoriesOne,
  categoriesTwo,
  categoriesThree,
  categoriesFour
} from '../../assets/index';

const Sidebar = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const toggleTheme = useThemeModeUpdateContext();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin', { replace: true });
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={logo} alt="logo" />
            VTube
          </Logo>
        </Link>
        {categoriesOne.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item>
              {category.icon}
              {category.name}
            </Item>
          </Link>
        ))}
        <Hr />
        {categoriesTwo.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item>
              {category.icon}
              {category.name}
            </Item>
          </Link>
        ))}
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in to like, videos, comment, and subscribe.
              <Link to="signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button>
                  <AccountCircleOutlined /> Sign In
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title>best of vtube</Title>
        {categoriesThree.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item>
              {category.icon}
              {category.name}
            </Item>
          </Link>
        ))}
        <Hr />
        {categoriesFour.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item>
              {category.icon}
              {category.name}
            </Item>
          </Link>
        ))}
        <Item onClick={toggleTheme}>
          <SettingsBrightnessOutlinedIcon />
          Light Theme
        </Item>
        <Item onClick={handleLogout}>
          <LogoutOutlined />
          Logout
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
