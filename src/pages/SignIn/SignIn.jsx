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
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to VTube</SubTitle>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button type="button">Sign In</Button>
        <Title>or</Title>
        <Input type="text" placeholder="username" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
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
