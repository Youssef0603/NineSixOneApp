/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text, View} from 'react-native';
import BottomTabs from './BottomTabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../types/enums';
import React from 'react';

const RootStackNav = createNativeStackNavigator();

const routes = [
  {
    name: Routes.BottomTabs,
    component: BottomTabs,
    options: {headerShown: false},
  },
];
const RootNavigator = () => {
  const Root = () => {
    return (
      // <View>
      //   <StatusBar
      //     barStyle={'dark-content'}
      //     backgroundColor="transparent"
      //     translucent={true}
      //   />
        <RootStackNav.Navigator>
          {routes.map(comp => (
            <RootStackNav.Screen {...comp} key={comp.name} />
          ))}
        </RootStackNav.Navigator>
      // </View>
    );
  };

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default RootNavigator;
