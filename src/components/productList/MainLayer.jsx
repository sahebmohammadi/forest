import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ProductList from './ProductList';

const MainLayer = () => {
  const [close, setClose] = useState(false);

  const useStyles = makeStyles({
    root: {
      position:"relative",
      width: '50%',
      boxShadow: 'none',
      borderRadius: '8px',
      color: '#747070',
      height:"90vh",
        },
    close: {
      display: 'none',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    closeButton: {
      position: 'absolute',
      right: 5,
      top: 5,
    },
  });

  const handleClose = () => {
    setClose(true);
  };

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={close ? classes.close : classes.root}>
      <CardContent>
        <Typography style={{ color: '#00A594', fontSize:"14" }}>
          عنوان اصلی گروه لایه‌ها
        </Typography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <ProductList />
      </CardContent>
    </Card>
  );
};

export default MainLayer;
