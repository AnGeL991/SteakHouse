import { FC } from "react";
import { MainLayout } from "components/layout";
import { BrowserRouter } from "react-router-dom";
import { History } from "history";
import { Routers } from "routers";
import "normalize.css";
import "./styles/global.scss";

interface IApp {
  history: History;
}

const App: FC<IApp> = ({ history }) => {
  return (
    <BrowserRouter {...{ history }}>
      <MainLayout>
        <Routers/>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
