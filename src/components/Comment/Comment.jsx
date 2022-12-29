import { Container, Avatar, Input, NewComment } from './Comment.styled';
import ListComment from './ListComment/ListComment';

const Comment = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <ListComment />
      <ListComment />
      <ListComment />
      <ListComment />
      <ListComment />
    </Container>
  );
};

export default Comment;
