import { FC } from 'react';
import { MainLayout } from 'components/layout';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Routers } from 'routers';
import 'normalize.css';
import './styles/global.scss';

interface IApp {
  history: History;
}

const App: FC<IApp> = ({ history }) => {
  return (
    <ConnectedRouter {...{ history }}>
      <MainLayout>
        <Routers />
      </MainLayout>
    </ConnectedRouter>
  );
};

export default App;
