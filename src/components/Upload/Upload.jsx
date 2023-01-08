/* eslint-disable no-unused-vars */
import { Container, Close, Title, Wrapper, Input, Desc, Button, Label } from './Upload.styled';

const Upload = ({ setOpen }) => {
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a new video</Title>
        <Label>Video:</Label>
        <Input type="file" accept="video/*" />
        <Input type="text" placeholder="Title" />
        <Desc placeholder="Description" rows={8} />
        <Input type="text" placeholder="Separate the tags with commas." />
        <Label>Image:</Label>
        <Input type="file" accept="image/*" />
        <Button>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
