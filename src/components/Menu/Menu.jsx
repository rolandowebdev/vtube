import styled from 'styled-components';
import { AccountCircleOutlined } from '@mui/icons-material';
import {
  logo,
  categoriesOne,
  categoriesTwo,
  categoriesThree,
  categoriesFour
} from '../../assets/index';

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: #fff;
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
  border: 0.5px solid #373737;
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

const Menu = () => {
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
      </Wrapper>
    </Container>
  );
};

export default Menu;
