import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-block: 30px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

export const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

export const DateText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

export const Text = styled.span`
  font-size: 14px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  place-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.textSoft};
  background-color: transparent;
  border: none;
  transition: 200ms all ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
