import { FC } from "react";
import { Home } from "components/view";
import { Route, Switch, useLocation } from "react-router-dom";

export const Routers: FC = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
