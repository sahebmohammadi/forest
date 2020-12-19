import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes/routes';
import AppLayout from './layout/AppLayout';
import uuid from 'react-uuid';
// import AuthProvider from 'components/AuthProvider';
// import PrivateRoute from 'components/PrivateRoute';

const App = () => {
  // useEffect(() => {
  //   console.log('saheb mim');
  // }, []);
  return (
    <AppLayout>
      <Switch>
        {routes.map((route) => (
          <Route key={uuid()} {...route} />
        ))}
      </Switch>
    </AppLayout>
  );
};

export default App;
