import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
`;

export const Search = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 40%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: #3ea6ff;
    color: #fff;
  }
`;
