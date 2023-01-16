import axios from 'axios';
import { format } from 'timeago.js';
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

import {
  Container,
  Content,
  Button,
  Buttons,
  Details,
  Info,
  Title,
  Hr,
  Channel,
  ChannelInfo,
  Subscribe,
  ChannelCounter,
  ChannelDetail,
  ChannelName,
  Description,
  Image,
  VideoFrame
} from './Video.styled';

import { Comments, Recommendation } from '../../components';

import { fetchSuccess, fetchFailure, dislike, like } from '../../features/video/videoSlice';
import { subscription } from '../../features/user/userSlice';

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

  const handleSubscribe = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      <Content>
        <VideoFrame src={currentVideo?.videoUrl} controls />
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views} views • {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser?._id) ? <ThumbUp /> : <ThumbUpOutlined />}{' '}
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
              <ChannelCounter>
                {channel?.subscribers} {channel?.subscribers > 1 ? 'Subscribers' : 'Subscriber'}
              </ChannelCounter>
              <Description>{channel?.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSubscribe}>
            {currentUser?.subscribedUsers?.includes(channel._id) ? 'SUBSCRIBED' : 'SUBSCRIBE'}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo?._id} />
      </Content>
      <Recommendation tags={currentVideo?.tags} />
    </Container>
  );
};

export default Video;
