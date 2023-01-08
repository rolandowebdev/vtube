import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

import {
  Container,
  Image,
  ChannelImage,
  Details,
  ChannelName,
  Info,
  Text,
  Title,
  Wrapper
} from './Card.styled';

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  console.log(channel);

  return (
    <Container>
      <Link to={`/video/${video?._id}`} style={{ textDecoration: 'none' }}>
        <Wrapper type={type}>
          <Image type={type} src={video?.imgUrl} />
          <Details type={type}>
            <ChannelImage type={type} src={channel?.image} />
            <Text>
              <Title>{video?.title}</Title>
              <ChannelName>{channel?.name}</ChannelName>
              <Info>
                {video?.views} views • {format(video?.createdAt)}
              </Info>
            </Text>
          </Details>
        </Wrapper>
      </Link>
    </Container>
  );
};

export default Card;
