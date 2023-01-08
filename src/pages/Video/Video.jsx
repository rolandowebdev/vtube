import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  ThumbUpOutlined,
  ThumbDownOutlined,
  ReplyOutlined,
  AddTaskOutlined,
  ThumbDown,
  ThumbUp
} from '@mui/icons-material';

import { format } from 'timeago.js';
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
import { Comment } from '../../components';

import { fetchSuccess, fetchFailure, dislike, like } from '../../features/video/videoSlice';

const Video = () => {
  const [channel, setChannel] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const idPath = useLocation().pathname.split('/')[2]; // get only id pathname

  useEffect(() => {
    async function fetchData() {
      try {
        const videoRes = await axios.get(`/videos/find/${idPath}`);
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);

        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        dispatch(fetchFailure());
      }
    }

    fetchData();
  }, [idPath, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo?._id}`);
    dispatch(like(currentUser?._id));
  };

  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo?._id}`);
    dispatch(dislike(currentUser?._id));
  };

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
          <Title>{currentVideo?.title}</Title>
          <Details>
            <Info>
              {currentUser?.views} views • {format(currentVideo?.createdAt)}
            </Info>
            <Buttons>
              <Button onClick={handleLike}>
                {currentVideo?.likes?.includes(currentUser?._id) ? (
                  <ThumbUp />
                ) : (
                  <ThumbUpOutlined />
                )}{' '}
                {currentVideo?.likes?.length}
              </Button>
              <Button onClick={handleDislike}>
                {currentVideo?.dislikes?.includes(currentUser?._id) ? (
                  <ThumbDown />
                ) : (
                  <ThumbDownOutlined />
                )}
                Dislike
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
              <Image src={channel?.image} />
              <ChannelDetail>
                <ChannelName>{channel?.name}</ChannelName>
                <ChannelCounter>{channel?.subscribers} Subscribers</ChannelCounter>
                <Description>{channel?.desc}</Description>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe>Subscribe</Subscribe>
          </Channel>
          <Hr />
          <Comment />
        </VideoWrapper>
      </Content>
      <Recommendation>
        {/* <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" /> */}
      </Recommendation>
    </Container>
  );
};

export default Video;
