import React, { Fragment, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Product from './Product';
import MainContext from '../context/MainContext';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '10px 0 0 0',
  },
  line: {
    height: '2px',
    width: '100%',
    backgroundColor: '#EDEDED',
    borderBottom: '2px solid #EDEDED',
    margin: '5px auto',
  },
}));

const ProductList = () => {
  const classes = useStyles();

  const context = useContext(MainContext);
  const { hiddenProduct } = context;

  return (
    <div>
      {hiddenProduct.map((list, index) => (
        <div className={classes.root}>
          <div className={classes.line} />
          <h4>{list.title}</h4>
          <Product products={list.products} index2={index} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
