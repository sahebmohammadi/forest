import React from 'react';
import styled from 'styled-components';
import classes from './dashboardPageContent.module.scss';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SelectComponent from './SearchSection';
import TabComponent from './TabComponent';
const DashBoardPageContent = () => {
  const [open, setOpen] = React.useState(true);
  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.topSection}>
          <spna>فضای شخصی</spna>
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={closeHandler}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div className={classes.searchSection}>
          <SelectComponent selectLabel="انتخاب از" />
          <SelectComponent selectLabel="استان" />
          <SelectComponent selectLabel="شهرستان" />
        </div>
        <p className={classes.hint}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد
        </p>
      </div>
      <TabComponent />
    </div>
  );
};

export default DashBoardPageContent;
