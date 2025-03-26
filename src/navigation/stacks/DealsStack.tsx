// HomeStack.tsx
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {dealsStackRoutes} from '../Routes';

const DealsStackNav = createNativeStackNavigator();

export const DealsStack = () => {

  return (
    <DealsStackNav.Navigator
      screenOptions={{
        contentStyle: { backgroundColor:'#FFFFFF' },
      }}
      initialRouteName={dealsStackRoutes[0].name}>
      {dealsStackRoutes.map(({ name, component, options }) => (
        <DealsStackNav.Screen
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
    </DealsStackNav.Navigator>
  );
};
