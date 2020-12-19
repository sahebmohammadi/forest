import React from 'react';
import classes from './bottom.module.scss';
import { ReactComponent as MiniMap } from '../../assets/images/miniMap.svg';
import { ReactComponent as WifiIcon } from '../../assets/images/wifiIcon.svg';
const BottomLeft = () => {
  return (
    <div className={classes.container}>
      <div className={classes.map}>
        <MiniMap />
        <span>نام لایه</span>
      </div>
      <div className={classes.icon}>
        <WifiIcon />
        <span>ماهواره</span>
      </div>
    </div>
  );
};

export default BottomLeft;
