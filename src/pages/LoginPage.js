import React from 'react';
import { Link } from 'react-router-dom';
import StepWiseProgressBar from '../components/progressBar/ProgressBar';

const LoginPage = () => {
  return (
    <>
      <p>اینجا صفحه لاگین است</p>
      <Link to="/">برو به ...</Link>
      <StepWiseProgressBar />
    </>
  );
};

export default LoginPage;
