import axios from 'axios';
import { useEffect, useState } from 'react';

import { Card } from '..';
import { Container } from './Recommendation.styled';

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideo();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video?._id} video={video} />
      ))}
    </Container>
  );
};

export default Recommendation;
