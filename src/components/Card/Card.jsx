import { Link } from 'react-router-dom';

import {
  Container,
  Image,
  ChannelImage,
  Details,
  ChannelName,
  Info,
  Text,
  Title
} from './Card.styled';

const Card = () => {
  return (
    <Container>
      <Link to="/video/test" style={{ textDecoration: 'none' }}>
        <Image src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA" />
        <Details>
          <ChannelImage src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
          <Text>
            <Title>Test Video</Title>
            <ChannelName>rolandowebdev</ChannelName>
            <Info>660,908 - 1 day ago</Info>
          </Text>
        </Details>
      </Link>
    </Container>
  );
};

export default Card;
