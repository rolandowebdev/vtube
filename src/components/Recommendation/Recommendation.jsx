import axios from 'axios';
import { useEffect, useState } from 'react';

import { Card, Loader } from '..';
import { Container } from './Recommendation.styled';

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchVideo = async () => {
        const res = await axios.get(`/videos/tags?tags=${tags}`);
        setVideos(res.data);
      };
      fetchVideo();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [tags]);

  if (loading) {
    return (
      <Container>
        <Loader center />
      </Container>
    );
  }

  return (
    <Container>{tags && videos.map((video) => <Card key={video?._id} video={video} />)}</Container>
  );
};

export default Recommendation;
