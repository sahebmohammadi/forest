import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import UploadFiles from './UploadFiles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    dispaly: 'flex',
    flexShrink: 0,
    flexDirection: 'column',
    margin: '0 auto',
    textAlign: 'center',
  },
  text: {
    fontSize: '11px',
    margin: '10px 0 15px 0',
  },
  margin: {
    margin: '0px auto',
    width: '80%',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Drawing = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <p className={classes.text}>محدوده مورد نظر را روی نقشه ترسیم کنید </p>

        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
        >
          آغاز ترسیم
        </Button>

        <UploadFiles />
      </div>
    </>
  );
};

export default Drawing;
