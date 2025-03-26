import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Text } from '@components';
import { ICON_TYPE } from '@types';

export const TitleHeader = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name="LogoIcon" type={ICON_TYPE.SVG} size={36} />
        <Text style={styles.title}>Deals</Text>
      </View>
      <TouchableOpacity style={styles.tabsIconContainer}>
        <Icon name="menu" size={22} color={'#000000'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 4,
    height: 42,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    color: '#000000',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: -4,
    marginTop: 2,
  },
  tabsIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
    borderRadius: 56,
  },
})