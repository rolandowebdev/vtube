import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container, Avatar, Input, NewComment } from './Comments.styled';
import ListComment from './ListComment/ListComment';

const Comment = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/comments/${videoId}`);
      setComments(res.data);
    };
    fetchComment();
  }, [videoId]);

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?._img} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      {comments.map((comment) => (
        <ListComment key={comment?._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comment;
