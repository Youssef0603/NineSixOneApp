import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigationState} from '@react-navigation/native';
import {Icon} from '../components/Icon';
import {ICON_TYPE, Routes} from '../types/enums';
import {HomeStack} from './stacks/HomeStack';
import {NewsStack} from './stacks/NewsStack';
import {DealsStack, PulseStack} from './stacks';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  // Get the current active route name from the tab navigator state.
  const pulseActive = useNavigationState(state => {
    const activeRoute = state.routes[state.index];
    // If there’s nested state (e.g., a nested navigator)
    if (activeRoute.state && activeRoute.state.routeNames) {
      const nestedIndex = activeRoute.state.index;
      const nestedRouteNames = activeRoute.state.routeNames;
      return nestedIndex === nestedRouteNames.length - 1;
    }
    // If no nested state, then check if active route's name is PulseStack
    return activeRoute.name === Routes.PulseStack;
  });
  
  console.log('pulseActive', pulseActive);

  const tabBarItems = [
    {
      route: Routes.HomeStack,
      icon: 'LogoIcon',
      type: ICON_TYPE.SVG,
      size: 47,
      component: HomeStack,
      style: {marginTop: 10},
    },
    {
      route: Routes.NewsStack,
      title: 'News',
      icon: 'NewsIcon',
      focusedIcon: 'NewsIconFocused',
      // white variants for use when in Pulse
      whiteIcon: 'NewsWhiteIcon',
      whiteFocusedIcon: 'NewsWhiteIcon',
      type: ICON_TYPE.SVG,
      component: NewsStack,
    },
    {
      route: Routes.DealsStack,
      title: 'Deals',
      icon: 'DealsIcon',
      focusedIcon: 'DealsIconFocused',
      // white variants for use when in Pulse
      whiteIcon: 'DealsWhiteIcon',
      whiteFocusedIcon: 'DealsIconWhiteFocused',
      type: ICON_TYPE.SVG,
      component: DealsStack,
    },
    {
      route: Routes.PulseStack,
      title: 'Pulse',
      icon: 'PulseIcon',
      focusedIcon: 'PulseIconFocused',
      type: ICON_TYPE.SVG,
      component: PulseStack,
    },
  ];

  return (
    <>
      {/* StatusBar configuration for this page only */}
      <Tab.Navigator
        initialRouteName={Routes.DealsStack}
        screenOptions={({route}) => {
          const isPulse = route.name === Routes.PulseStack;
          return {
            headerShown: false,
            tabBarStyle: {
              backgroundColor: isPulse ? '#000' : '#FFFFFF',
              borderTopWidth: 0,
              paddingTop: 8,
              height: 70,
            },
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: isPulse ? '#FFF' : '#FF0000',
            tabBarInactiveTintColor: isPulse ? '#FFF' : '#000000',
          };
        }}>
        {tabBarItems.map((item, idx) => (
          <Tab.Screen
            key={idx}
            name={item.route}
            component={item.component}
            options={{
              tabBarLabel: item.title ?? '',
              tabBarLabelStyle: item.title
                ? {
                    fontSize: 10,
                    lineHeight: 17,
                    fontWeight: '400',
                  }
                : undefined,
              tabBarIcon: ({color, focused}) => {
                // Default icon name:
                let iconName = focused
                  ? item.focusedIcon ?? item.icon
                  : item.icon;
                // If Pulse is active and this is News or Deals, override with white icons.
                if (
                  pulseActive &&
                  (item.route === Routes.NewsStack ||
                    item.route === Routes.DealsStack)
                ) {
                  iconName = focused
                    ? item.whiteFocusedIcon ?? iconName
                    : item.whiteIcon ?? iconName;
                }
                return (
                  <Icon
                    name={iconName}
                    color={color}
                    size={item.size ?? 20}
                    type={item.type}
                    containerStyle={item.style}
                  />
                );
              },
              tabBarButtonTestID: `tab-${item.route}`,
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
