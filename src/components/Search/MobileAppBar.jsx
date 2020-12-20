import React from 'react';
import classes from './mobileAppBar.module.scss';
import { Avatar } from '@material-ui/core';
import profileImage from '../../assets/images/profileImage.png';
import SearchIcon from '@material-ui/icons/Search';
import { ReactComponent as MiniMap } from '../../assets/images/miniMap.svg';
import { ReactComponent as WifiIcon } from '../../assets/images/wifiIcon.svg';
const MobileAppBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <div>
          <Avatar src={profileImage} alt="" />
        </div>
        {/* <div className={classes.profileInfo}>
          <span>صاحب محمدی</span>
          <span>کارشناس</span>
        </div> */}
      </div>
      <div className={classes.search}>
        <input type="text" />
        <span>
          <SearchIcon />
        </span>
      </div>
      <div className={classes.map}>
        <MiniMap />
      </div>
      <div className={classes.icon}>
        <WifiIcon />
      </div>
    </div>
  );
};

export default MobileAppBar;
