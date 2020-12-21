import React from 'react';
import { IconButton } from '@material-ui/core';
import { ReactComponent as Share } from '../../assets/images/share.svg';
import { ReactComponent as Download } from '../../assets/images/download.svg';
import { ReactComponent as Exclamation } from '../../assets/images/exclamation.svg';
import { ReactComponent as Settings } from '../../assets/images/settings.svg';
import { ReactComponent as OtherIcon } from '../../assets/images/otherIcon.svg';
import classes from './dashboardPageContent.module.scss';
import LineChart from './LineChart';
const counterLayerDescription = [
  { title: 'عنوان', value: 'مقدار' },
  { title: 'عنوان', value: 'مقدار' },
  { title: 'عنوان', value: 'مقدار' },
  { title: 'عنوان', value: 'مقدار' },
  { title: 'عنوان', value: 'مقدار' },
  { title: 'عنوان', value: 'مقدار' },
];
const SummarySection = () => {
  return (
    <div className={classes.summaryWrapper}>
      <div className={classes.graph}>
        <GraphHeader />
        {/* main graph... */}
        <LineChart/>
        <GraphDescription />
      </div>
      <div className={classes.circleGraph}>
        <GraphHeader />
        circle
        <GraphDescription />
      </div>
      <div className={classes.layerDetail}>
        <GraphHeader />
        <GraphDescription />
        <div>
          {counterLayerDescription.map((item, index) => {
            const { title, value } = item;
            return <Counter title={title} value={value} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SummarySection;

const GraphHeader = () => {
  return (
    <div className={classes.graphHeader}>
      <span>عنوان لایه</span>
      <div className={classes.buttonGroup}>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <Download />
        </IconButton>
        <IconButton>
          <Exclamation />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <OtherIcon />
        </IconButton>
      </div>
    </div>
  );
};

const GraphDescription = () => {
  return (
    <p className={classes.graphDescription}>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
      گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
      برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
      می باشد
    </p>
  );
};

const Counter = ({ index, title, value }) => {
  return (
    <div className={classes.layerCounter}>
      <div>
        <p>{index + 1}</p>
        <span>{title}</span>
      </div>
      <span>{value}</span>
    </div>
  );
};

