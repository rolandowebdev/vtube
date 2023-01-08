import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AccountCircleOutlined, SearchOutlined, VideoCallOutlined } from '@mui/icons-material';

import { Container, Button, Input, Search, Wrapper, User, Avatar } from './Navbar.styled';

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search..." />
          <SearchOutlined />
        </Search>
        {!currentUser ? (
          <Link to="signin" style={{ textDecoration: 'none' }}>
            <Button>
              <AccountCircleOutlined /> Sign In
            </Button>
          </Link>
        ) : (
          <User>
            <VideoCallOutlined />
            <Avatar src={currentUser.image} />
            {currentUser.name}
          </User>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
