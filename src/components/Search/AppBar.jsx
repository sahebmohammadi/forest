import React from 'react';
import SearchInput from './SearchInput';
import classes from './appBar.module.scss';
import profileImage from '../../assets/images/profileImage.png';

const AppBar = () => {
  return (
    <div className={classes.container}>
      {/* <Grid></Grid> */}
      <div className={classes.search}>
        <SearchInput />
      </div>
      <div className={classes.profile}>
        <div>
          <img src ={profileImage} alt ="PI"></img>
        </div>
        <div className={classes.profileInfo}>
          <span>صاحب محمدی</span>
          <span>کارشناس</span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;


