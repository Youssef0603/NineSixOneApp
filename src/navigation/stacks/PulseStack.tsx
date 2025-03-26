import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {pulseStackRoutes} from '../Routes';

const PulseStackNav = createNativeStackNavigator();

export const PulseStack = () => {

  return (
    <PulseStackNav.Navigator
      screenOptions={{
        contentStyle: { backgroundColor:'#FFFFFF' },
      }}
      initialRouteName={pulseStackRoutes[0].name}>
      {pulseStackRoutes.map(({ name, component, options }) => (
        <PulseStackNav.Screen
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
    </PulseStackNav.Navigator>
  );
};
