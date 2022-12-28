import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { AccountCircleOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Container, Button, Hr, Img, Item, Login, Logo, Title, Wrapper } from './Sidebar.styled';

import { useThemeModeUpdateContext } from '../ThemeModeProvider/ThemeModeProvider';

import {
  logo,
  categoriesOne,
  categoriesTwo,
  categoriesThree,
  categoriesFour
} from '../../assets/index';

const Sidebar = () => {
  const toggleTheme = useThemeModeUpdateContext();

  return (
    <Container>
      <Wrapper>
        <Link to="video/test" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={logo} alt="logo" />
            VTuber
          </Logo>
        </Link>
        {categoriesOne.map((category) => (
          <Item key={category.id}>
            {category.icon}
            {category.name}
          </Item>
        ))}
        <Hr />
        {categoriesTwo.map((category) => (
          <Item key={category.id}>
            {category.icon}
            {category.name}
          </Item>
        ))}
        <Hr />
        <Login>
          Sign in to like, videos, comment, and subscribe.
          <Button>
            <AccountCircleOutlined /> Sign In
          </Button>
        </Login>
        <Hr />
        <Title>best of vtube</Title>
        {categoriesThree.map((category) => (
          <Item key={category.id}>
            {category.icon}
            {category.name}
          </Item>
        ))}
        <Hr />
        {categoriesFour.map((category) => (
          <Item key={category.id}>
            {category.icon}
            {category.name}
          </Item>
        ))}
        <Item onClick={toggleTheme}>
          <SettingsBrightnessOutlinedIcon />
          Light Theme
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
