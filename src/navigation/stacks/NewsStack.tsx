// NewsStack.tsx
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {newsStackRoutes} from '../Routes';

const NewsStackNav = createNativeStackNavigator();

export const NewsStack = () => {
  return (
    <NewsStackNav.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: '#FFFFFF'},
      }}
      initialRouteName={newsStackRoutes[0].name}>
      {newsStackRoutes.map(({name, component, options}) => (
        <NewsStackNav.Screen
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
    </NewsStackNav.Navigator>
  );
};
