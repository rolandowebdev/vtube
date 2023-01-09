import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SendRounded } from '@mui/icons-material';

import { Container, Avatar, Input, NewComment, Button } from './Comments.styled';
import ListComment from './ListComment/ListComment';

const Comment = ({ videoId }) => {
  const [desc, setDesc] = useState('');
  const [comments, setComments] = useState([]);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/comments/${videoId}`);
      setComments(res.data);
    };
    fetchComment();
    return () => null;
  }, [videoId]);

  const handlePostComment = async (e) => {
    e.preventDefault();
    try {
      if (desc === '') null;
      await axios.post('/comments/', { desc, videoId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?._img} />
        <Input placeholder="Add a comment..." onChange={(e) => setDesc(e.target.value)} />
        <Button onClick={handlePostComment}>
          <SendRounded />
        </Button>
      </NewComment>
      {comments.map((comment) => (
        <ListComment key={comment?._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comment;
