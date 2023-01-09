import styled from 'styled-components';

export const Container = styled.div``;

export const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  place-items: center;
  padding: 10px 10px 10px 12px;
  border-radius: 50%;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft};
  border: none;
  transition: 200ms all ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: ${({ theme }) => theme.textSoft};
    color: ${({ theme }) => theme.bgLighter};
  }
`;
