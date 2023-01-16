import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 112px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 2rem 40px;
  width: 380px;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
`;

export const Title = styled.h1`
  font-style: 24px;
  margin-top: 1rem;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  outline: none;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.text};
  }
`;

export const Button = styled.button`
  min-width: 91px;
  min-height: 40px;
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  &:hover {
    background-color: ${({ theme }) => theme.bg};
  }
`;

export const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

export const Links = styled.div`
  margin-left: 50px;
`;

export const ListLink = styled.span`
  margin-left: 30px;
`;
