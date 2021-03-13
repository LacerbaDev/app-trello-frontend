import styled from '@emotion/styled';
import { Nav } from './components/nav';
import { Dashboards } from './Dashboard';

const Container = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <div>
      <Nav />
      <Container>
        <Dashboards />
      </Container>
    </div>
  );
}

export default App;
