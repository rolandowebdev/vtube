import { AccountCircleOutlined, SearchOutlined } from '@mui/icons-material';
import { Container, Button, Input, Search, Wrapper } from './Navbar.styled';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search..." />
          <SearchOutlined />
        </Search>
        <Button>
          <AccountCircleOutlined /> Sign In
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
