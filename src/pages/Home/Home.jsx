import { useState, useEffect } from 'react';
import axios from 'axios';

import { Card } from '../../components';
import { Container } from './Home.styled';

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await axios.get(`/videos/${type}`);
        setVideos(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchVideo();
  }, [type]);

  if (loading) return <p>Loading Video..</p>;
  if (error) return <p>An error occured: {error.message}</p>;

  return (
    <Container videoLength={videos.length}>
      {videos ? videos.map((video) => <Card key={video?._id} video={video} />) : null}
    </Container>
  );
};

export default Home;
