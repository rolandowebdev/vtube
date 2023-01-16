import { ProgressBar, Oval } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = ({ type, center }) => {
  return (
    <Container style={{ height: `${center ? 'calc(100vh - 112px)' : ''}` }}>
      {type === 'oval' ? (
        <Oval color="#f9f9f9" secondaryColor="#aaaaaa" width={18} height={15} />
      ) : (
        <ProgressBar barColor="#f9f9f9" borderColor="#aaaaaa" />
      )}
    </Container>
  );
};

export default Loader;
