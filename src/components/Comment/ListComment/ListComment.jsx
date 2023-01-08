import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Avatar, DateText, Details, Name, Text } from './ListComment.styled';

const ListComment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment?.userId}`);
      setChannel(res.data);
    };
    fetchComment();
  }, [comment?.userId]);

  return (
    <Container>
      <Avatar src={channel?.image} />
      <Details>
        <Name>
          {channel?.name} <DateText>3 day ago</DateText>
        </Name>
        <Text>{comment?.desc}</Text>
      </Details>
    </Container>
  );
};

export default ListComment;
