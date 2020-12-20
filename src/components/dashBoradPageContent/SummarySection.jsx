import React from 'react';
import { IconButton } from '@material-ui/core';
import { ReactComponent as Share } from '../../assets/images/share.svg';
import { ReactComponent as Download } from '../../assets/images/download.svg';
import { ReactComponent as Exclamation } from '../../assets/images/exclamation.svg';
import { ReactComponent as Settings } from '../../assets/images/settings.svg';
import { ReactComponent as OtherIcon } from '../../assets/images/otherIcon.svg';
import classes from './dashboardPageContent.module.scss';
const SummarySection = () => {
  return (
    <div className={classes.summaryWrapper}>
      <div className={classes.graph}>
        <GraphHeader />
        asasas
      </div>
      <div className={classes.circleGraph}>
        <GraphHeader />
        circle
      </div>
      <div className={classes.layerDetail}>
        <GraphHeader />
        detail
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

// export default GraphHeader;
