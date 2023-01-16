import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AccountCircleOutlined, SearchOutlined, VideoCallOutlined } from '@mui/icons-material';

import { useState } from 'react';

import { Upload } from '..';
import { Container, Button, Input, Search, Wrapper, User, Avatar } from './Navbar.styled';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input type="text" placeholder="Search..." onChange={(e) => setQ(e.target.value)} />
            <SearchOutlined onClick={() => navigate(`/search?q=${q}`)} />
          </Search>
          {!currentUser ? (
            <Link to="signin" style={{ textDecoration: 'none' }}>
              <Button>
                <AccountCircleOutlined /> Sign In
              </Button>
            </Link>
          ) : (
            <User>
              <VideoCallOutlined style={{ cursor: 'pointer' }} onClick={() => setOpen(true)} />
              <Avatar src={currentUser.image} />
              {currentUser.name}
            </User>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
