import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000a7;
  z-index: 999;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Input = styled.input`
  height: 60px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  outline: none;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.text};
  }
`;

export const Desc = styled.textarea`
  padding: 10px;
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
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  border: none;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: #3ea6ff;
    color: #fff;
  }
`;

export const Label = styled.label`
  font-size: 14px;
`;
