import React, {useRef, useEffect} from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Animated,
  Easing,
  ListRenderItem,
  ViewStyle,
  Pressable,
} from 'react-native';
import Fonts from 'src/constants/Fonts';
import {Text} from '@components';

export interface HeaderItem {
  label: string;
  isAd?: boolean;
}

interface ListHeaderComponentProps {
  data: HeaderItem[];
  showLogo?: boolean;
  containerStyle?: ViewStyle;
  activeTab?: string;
  onTabPress?: (label: string) => void;
}

export const ListHeaderComponent: React.FC<ListHeaderComponentProps> = ({
  data,
  showLogo = true,
  containerStyle,
  activeTab,
  onTabPress,
}) => {
  // Fade animation for the red dot
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad),
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad),
        }),
      ]),
    ).start();
  }, [fadeAnim]);

  const renderHeaderItem: ListRenderItem<HeaderItem> = ({item}) => {
    // If it's an ad (e.g., Pepsi)
    if (item.isAd) {
      return (
        <View style={styles.pepsiAdContainer}>
          <Text style={styles.pepsiAdText}>{item.label}</Text>
          <Text style={styles.adLabel}>AD</Text>
        </View>
      );
    }

    // If it's LIVE, render with a fading red dot
    if (item.label === 'LIVE') {
      return (
        <View style={styles.liveContainer}>
          <Animated.View style={[styles.redDot, {opacity: fadeAnim}]} />
          <Text style={[styles.headerItem, styles.liveItem, {fontSize: 12}]}>
            {item.label}
          </Text>
        </View>
      );
    }

    // Default header item
    return (
      <Pressable onPress={() => onTabPress?.(item.label)}>
        <Text
          style={[
            styles.headerItem,
            activeTab === item.label ? styles.activeTab : styles.inactiveTab,
          ]}>
          {item.label}
        </Text>
        {activeTab === item.label && <View style={styles.underline} />}
      </Pressable>
    );
  };

  return (
    <View style={[styles.headerWrapper, containerStyle]}>
      {/* Conditionally render the logo */}
      {showLogo && (
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/HeaderLogo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
      )}

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderHeaderItem}
        keyExtractor={(item, index) => `${item.label}-${index}`}
        contentContainerStyle={styles.headerScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // or a gradient if you like
    paddingVertical: 5,
  },
  logoContainer: {
    paddingHorizontal: 10,
  },
  logoImage: {
    width: 95,
    height: 48,
  },
  headerScroll: {
    alignItems: 'center',
    gap: 16,
    paddingRight: 16,
  },
  headerItem: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: Fonts.regular,
  },
  // LIVE item styling
  liveItem: {
    color: 'red',
    fontWeight: '700',
  },
  // LIVE + dot container
  liveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingBottom: 5
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    marginLeft: 4,
  },

  // Pepsi (Ad) styling
  pepsiAdContainer: {
    position: 'relative',
    justifyContent: 'center',
    marginRight: 10,
  },
  pepsiAdText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.regular,
    paddingBottom: 9,
  },
  adLabel: {
    position: 'absolute',
    top: -2,
    right: -10,
    fontSize: 5,
    fontWeight: '700',
    color: '#fff',
    opacity: 0.8,
  },
  activeTab: {
    color: '#fff',
  },

  inactiveTab: {
    color: '#fff',
    opacity: 0.8,
    paddingBottom: 7,
  },

  underline: {
    height: 3,
    backgroundColor: '#fff',
    marginTop: 4,
    width: '50%',
    alignSelf: 'center',
  },
});
