/* eslint-disable react/prop-types */
import { AccountCircleOutlined } from '@mui/icons-material';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import styled from 'styled-components';
import {
  logo,
  categoriesOne,
  categoriesTwo,
  categoriesThree,
  categoriesFour
} from '../../assets/index';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  overflow-y: auto;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: #3ea6ff;
    color: #fff;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Sidebar = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} alt="logo" />
          VTuber
        </Logo>
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
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          Light Theme
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
