import axios from 'axios';
import { useState, useRef } from 'react';
import Footer from './Footer';
import { Container, Wrapper, Button, Input, Title } from './SignUp.styled';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUp = async () => {
    try {
      await axios.post('auth/signup', { name, email, password });
    } catch (error) {
      console.log(error);
    } finally {
      nameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        <Input
          ref={nameRef}
          type="text"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <Input
          ref={emailRef}
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <Input
          ref={passwordRef}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <Button type="button" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SignUp;
