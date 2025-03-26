// HomeStack.tsx
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {homeStackRoutes} from '../Routes';

const HomeStackNav = createNativeStackNavigator();

export const HomeStack = () => {

  return (
    <HomeStackNav.Navigator
      screenOptions={{
        contentStyle: { backgroundColor:'#FFFFFF' },
      }}
      initialRouteName={homeStackRoutes[0].name}>
      {homeStackRoutes.map(({ name, component, options }) => (
        <HomeStackNav.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerShown: false, 
            headerBackTitleVisible: false,
            ...options,
          }}
        />
      ))}
    </HomeStackNav.Navigator>
  );
};
