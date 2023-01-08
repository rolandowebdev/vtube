import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginSuccess, loginFailure } from '../../features/user/userSlice';

import {
  Container,
  Wrapper,
  Button,
  Input,
  More,
  SubTitle,
  Title,
  ListLink,
  Links
} from './SignIn.styled';

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/signin', { name, password });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to VTube</SubTitle>
        <Input type="text" placeholder="username" onChange={(e) => setName(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="button" onClick={handleLogin}>
          Sign In
        </Button>
        <Title>or</Title>
        <Input type="text" placeholder="username" onChange={(e) => setName(e.target.value)} />
        <Input type="email" placeholder="email" />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="button">Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <ListLink>Help</ListLink>
          <ListLink>Privacy</ListLink>
          <ListLink>Terms</ListLink>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
