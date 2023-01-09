import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './Search.styled';
import { Card } from '../../components';

const Search = () => {
  const query = useLocation().search; // get query from query
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [query]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video?._id} video={video} />
      ))}
    </Container>
  );
};

export default Search;
