import { Link } from 'react-router-dom';
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
        <Link to="signin" style={{ textDecoration: 'none' }}>
          <Button>
            <AccountCircleOutlined /> Sign In
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
