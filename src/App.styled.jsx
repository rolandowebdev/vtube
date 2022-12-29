import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex: 5;
  background-color: ${({ theme }) => theme.bgLighter};
`;

export const Wrapper = styled.div`
  padding: 28px;
`;
