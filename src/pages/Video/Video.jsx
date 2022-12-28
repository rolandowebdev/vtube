import {
  ThumbUpOutlined,
  ThumbDownOutlined,
  ReplyOutlined,
  AddTaskOutlined
} from '@mui/icons-material';

import {
  Container,
  Content,
  Recommendation,
  Button,
  Buttons,
  Details,
  Info,
  Title,
  VideoWrapper,
  Hr,
  Channel,
  ChannelInfo,
  Subscribe,
  ChannelCounter,
  ChannelDetail,
  ChannelName,
  Description,
  Image
} from './Video.styled';

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="440"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Title>Test Video</Title>
          <Details>
            <Info>7,948,154 views • Jun 22, 2022</Info>
            <Buttons>
              <Button>
                <ThumbUpOutlined /> 123
              </Button>
              <Button>
                <ThumbDownOutlined /> Dislike
              </Button>
              <Button>
                <ReplyOutlined /> Share
              </Button>
              <Button>
                <AddTaskOutlined /> Save
              </Button>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
              <ChannelDetail>
                <ChannelName>rolandowebdev</ChannelName>
                <ChannelCounter>1 M Subscribers</ChannelCounter>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem libero vero
                  quasi quos neque tenetur architecto exercitationem consequatur ipsam corporis?
                </Description>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe>Subscribe</Subscribe>
          </Channel>
        </VideoWrapper>
      </Content>
      <Recommendation>recommendation</Recommendation>
    </Container>
  );
};

export default Video;
