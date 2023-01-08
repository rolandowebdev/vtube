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
  return (
    <Container>
      <Link to="/video/test" style={{ textDecoration: 'none' }}>
        <Wrapper type={type}>
          <Image type={type} src={video?.imageUrl} />
          <Details type={type}>
            <ChannelImage type={type} src={video?.imgUrl} />
            <Text>
              <Title>{video?.title}</Title>
              <ChannelName>rolandowebdev</ChannelName>
              <Info>
                {video?.views} • {format(video?.createdAt)}
              </Info>
            </Text>
          </Details>
        </Wrapper>
      </Link>
    </Container>
  );
};

export default Card;
