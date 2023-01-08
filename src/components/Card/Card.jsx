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
            <ChannelImage
              type={type}
              src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
            />
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
