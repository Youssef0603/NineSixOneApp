import DealsScreen from '@screens/DealsScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import {Routes} from '../types/enums';
import PulseScreen from '@screens/PulseScreen';

export const homeStackRoutes = [
  {
    name: Routes.HomeScreen,
    component: HomeScreen,
  },
];

export const newsStackRoutes = [
  {
    name: Routes.NewsScreen,
    component: NewsScreen,
  },
];
export const dealsStackRoutes = [
  {
    name: Routes.DealsStack,
    component: DealsScreen,
  },
];
export const pulseStackRoutes = [
  {
    name: Routes.NewsStack,
    component: PulseScreen,
  },
];

export const commonRoutes = [
  ...homeStackRoutes,
  ...newsStackRoutes,
  ...dealsStackRoutes,
  ...pulseStackRoutes,
];
