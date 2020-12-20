import React, { Fragment, useContext, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MainContext from '../context/MainContext';
import { makeStyles } from '@material-ui/core';
import info from '../../assets/images/info.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    boxShadow: 'none',
    color: '#747070',
    padding: 0,
  },
  right: {
    display: 'flex',
    padding: 0,
  },
  switch: {
    alignSelf: 'top',
    margin: 0,
  },
  text: {
    alignSelf: 'center',
    padding: 0,
    margin: 0,
  },
  title: {
    fontSize:13,
  },
  pos: {
    fontSize: 11,
    padding:"2px 0 0 0",
    marginBottom: '-8px',
  },
  info: {
    alignSelf: 'bottom',
    marginTop: '8px',
  },
}));

const Product = ({ products, index2 }) => {
  const context = useContext(MainContext);
  const { hiddenProduct, handleHiddenChange } = context;
  const [maxLengthDescription] = useState(21);

  const classes = useStyles();

  return (
    <Fragment>
      {products.map((product, index) => (
        <Card className={classes.root}>
          <div className={classes.right}>
            <Switch
              className={classes.switch}
              checked={product.checked}
              onChange={() => handleHiddenChange(index, index2)}
              color="primary"
            />
            <CardContent ariaLabel="SpeedDial example" className={classes.text}>
              <Typography className={classes.title} >{product.title}</Typography>
              <Typography className={classes.pos} color="textSecondary">
                {`${product.description.substring(0, maxLengthDescription)}...`}
              </Typography>
            </CardContent>
          </div>
          <img src={info} width="15" height="15" className={classes.info} />
        </Card>
      ))}
    </Fragment>
  );
};

export default Product;
