import { Container, Avatar, DateText, Details, Name, Text } from './ListComment.styled';

const ListComment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
      <Details>
        <Name>
          Isagi Yoichi <DateText>3 day ago</DateText>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus id odit a
          et, voluptas quae error sunt accusantium quam.
        </Text>
      </Details>
    </Container>
  );
};

export default ListComment;
