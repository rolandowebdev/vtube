import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 14px;
  cursor: pointer;
  flex-grow: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: ${({ type }) => (type === 'sm' ? '125px' : '170px')};
  background-color: #999;
  border-radius: 14px;
`;

export const Details = styled.div`
  display: flex;
  margin-top: ${({ type }) => type !== 'sm' && '10px'};
  gap: 12px;
`;

export const ChannelImage = styled.img`
  display: ${({ type }) => type === 'sm' && 'none'};
  height: 32px;
  aspect-ratio: 1 / 1;
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
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.textSoft};
  margin-block: 6px;
`;

export const Info = styled.p`
  font-size: 14px;
  width: max-content;
  color: ${({ theme }) => theme.textSoft};
`;
