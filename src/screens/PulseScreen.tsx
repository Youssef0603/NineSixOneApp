import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Icon,
  ListHeaderComponent,
  ReelLeftSection,
  ReelActionBar,
} from '@components';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const data = [
  {label: 'Following'},
  {label: 'For You'},
  {label: 'News'},
  {label: 'Eat & Drink'},
  {label: 'pepsi', isAd: true},
];

const PulseScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('For You');
  const insets = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <LinearGradient
        colors={['#2600FF', '#FF0000']}
        style={StyleSheet.absoluteFillObject}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />

      {/* Top Tabs */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 16,
          paddingRight: 5,
        }}>
        <ListHeaderComponent
          containerStyle={{backgroundColor: 'transparent', width: width - 90}}
          data={data}
          activeTab={activeTab}
          onTabPress={label => setActiveTab(label)}
          showLogo={false}
        />
        <View style={styles.headerIcons}>
          <Icon name="volume-off" size={20} color="#FFF" />
          <Icon name="search" size={20} color="#FFF" />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <ReelLeftSection />
        <ReelActionBar />
      </View>
      <View style={{flexDirection: 'row', height: 2}}>
        <View style={{width: '30%', backgroundColor: '#ff0000'}} />

        <View
          style={{width: '70%', backgroundColor: 'rgba(201, 201, 201, 0.50)'}}
        />
      </View>
    </View>
  );
};

export default PulseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    gap: 10,
    marginBottom: 2
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 5,
  },
});
