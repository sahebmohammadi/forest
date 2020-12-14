import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import LogoutPage from '../pages/LogoutPage';
import DashboardPage from '../pages/DashBoardPage';
import ForestChangesPage from '../pages/ForestChanges';
import GroundCoverPage from '../pages/GroundCoverPage';

const routes = [
  {
    // private: true,
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    // private: true,
    exact: true,
    path: '/dashboard',
    component: DashboardPage,
  },
  {
    // private: true,
    exact: true,
    path: '/forestChanges',
    component: ForestChangesPage,
  },
  {
    // private: true,
    exact: true,
    path: '/groundCover',
    component: GroundCoverPage,
  },
  {
    // private: true,
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/logout',
    component: LogoutPage,
  },
  {
    component: NotFound,
  },
];

export default routes;

// path: "/example/:page([0-9]+)",
// path: "/example/:name([A-Za-z]+)"
