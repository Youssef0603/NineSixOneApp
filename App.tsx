import {store} from './src/redux/store';
import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';

function App(): React.JSX.Element {
 
  return (
    <SafeAreaProvider>
      <Provider store={store}>
          <GestureHandlerRootView style={{flex: 1}}>
            <RootNavigator />
          </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
