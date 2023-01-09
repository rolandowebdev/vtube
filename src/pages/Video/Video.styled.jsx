import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 24px;
`;

export const Content = styled.div`
  flex: 5;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-top: 8px;
  margin: 8px 0;
  color: ${({ theme }) => theme.text};
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.text}
`;

export const ChannelName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

export const Hr = styled.hr`
  margin-block: 15px;
  border-bottom: 0.5px solid ${({ theme }) => theme.soft};
`;

export const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;
