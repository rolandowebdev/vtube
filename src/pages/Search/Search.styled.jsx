import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: ${({ videoLength }) => (videoLength > 1 ? 'stretch' : 'start')};
  gap: 12px;
`;
