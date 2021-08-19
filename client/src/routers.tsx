import { FC, useMemo } from 'react';
import { Home, Menu, Contact, Cart, PageNoFound } from 'components/view';
import { Route, Switch, useLocation } from 'react-router-dom';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/menu', component: Menu },
  { exact: true, path: '/contact', component: Contact },
  { exact: true, path: '/cart', component: Cart },
  { exact: true, path: '*', component: PageNoFound },
];

export const Routers: FC = () => {
  const location = useLocation();

  const router = useMemo(
    () =>
      routes.map((el, index) => (
        <Route
          key={index}
          exact={el.exact}
          path={el.path}
          component={el.component}
        />
      )),
    []
  );
  return <Switch location={location}>{router}</Switch>;
};
