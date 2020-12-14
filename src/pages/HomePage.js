import React from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';

const HomePage = () => {
  return (
    <>
      <AppLayout>
        <p>اینجا صفحه اصلی است</p>
        <Link to="#">برو به ...</Link>
      </AppLayout>
    </>
  );
};

export default HomePage;
