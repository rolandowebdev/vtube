import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';

import { auth, provider } from '../../utils/firebase';
import { loginSuccess, loginFailure } from '../../features/user/userSlice';

import { Container, Wrapper, Button, Input, SubTitle, Title } from './SignIn.styled';
import Footer from './Footer';

const SignIn = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/signin', { name, password });
      dispatch(loginSuccess(res.data));
      navigate('/', { replace: true });
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  // function for login with google firebase
  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) =>
        axios
          .post('/auth/google', {
            name: result?.user?.displayName,
            email: result?.user?.email,
            image: result?.user?.photoURL
          })
          .then((res) => dispatch(loginSuccess(res.data), navigate('/', { replace: true })))
      )
      .catch(() => dispatch(loginFailure()));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>for continue to VTube</SubTitle>
        <Input
          type="text"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <Button type="button" onClick={handleLogin}>
          Sign In
        </Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Signin with Google</Button>
        <SubTitle style={{ marginTop: 4 }}>
          Already have account?{' '}
          <Link to="/signup" style={{ color: '#0081C9', textDecoration: 'none' }}>
            SignUp
          </Link>
        </SubTitle>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SignIn;
