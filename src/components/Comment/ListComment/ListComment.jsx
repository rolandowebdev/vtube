import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { DeleteRounded } from '@mui/icons-material';

import { useSelector } from 'react-redux';
import { Container, Avatar, DateText, Details, Name, Text, Button } from './ListComment.styled';

const ListComment = ({ comment }) => {
  const [channel, setChannel] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment?.userId}`);
      setChannel(res.data);
    };
    fetchComment();
    return () => null;
  }, [comment?.userId]);

  const handleDeleteComment = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/comments/${comment?._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Avatar src={channel?.image} />
      <Details>
        <Name>
          {channel?.name} <DateText>3 day ago</DateText>
        </Name>
        <Text>{comment?.desc}</Text>
      </Details>
      {currentUser?._id === comment?.userId || currentVideo?._id === comment?.userId ? (
        <Button onClick={handleDeleteComment}>
          <DeleteRounded />
        </Button>
      ) : null}
    </Container>
  );
};

export default ListComment;
