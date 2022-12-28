import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 18px;
  cursor: pointer;
  flex-grow: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 170px;
  background-color: #999;
`;

export const Details = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 12px;
`;

export const ChannelImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

export const Text = styled.div``;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 6px 0;
`;

export const Info = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
