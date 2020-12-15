import uuid from 'react-uuid';
import { ReactComponent as ForestChanges } from '../../assets/images/forestChanges.svg';
import { ReactComponent as GroundCover } from '../../assets/images/groundCover.svg';
import { ReactComponent as Dashboard } from '../../assets/images/dashboard.svg';
import { ReactComponent as Profile } from '../../assets/images/panel.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

export const drawerListItems = [
  {
    text: '',
    icon: [<Logo fill="#00a594" />, <Logo fill="#00a594" />],
    id: uuid(),
    path: '',
  },
  {
    text: 'تغییرات جنگل',
    icon: [<ForestChanges fill="#747070" />, <ForestChanges fill="#00a594" />],
    id: uuid(),
    path: '/forestChanges',
  },
  {
    text: 'پوشش زمین',
    icon: [<GroundCover fill="#747070" />, <GroundCover fill="#00a594" />],
    id: uuid(),
    path: '/groundCover',
  },
  {
    text: 'داشبورد',
    icon: [<Dashboard fill="#747070" />, <Dashboard fill="#00a594" />],
    id: uuid(),
    path: '/dashboard',
  },
  {
    text: 'فضای شخصی',
    icon: [<Profile fill="#747070" />, <Profile fill="#00a594" />],
    id: uuid(),
    path: '/profile',
  },
];
