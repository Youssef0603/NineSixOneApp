import React, { useCallback } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import { Text, ListHeaderComponent } from '@components';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

const HomeScreen: React.FC = () => {
  // Select the news header data from Redux
  const headerItems = useSelector((state: RootState) => state.app.newsHeader);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('black');
      StatusBar.setBarStyle('light-content');
    }, [])
  );

  return (
    <SafeAreaView style={[styles.safeArea,{ paddingTop: StatusBar.currentHeight }]}>
      <ListHeaderComponent data={headerItems} />
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>News</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F9',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 36,
    fontWeight: '700',
  },
});
