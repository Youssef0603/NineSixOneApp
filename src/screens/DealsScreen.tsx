import React, {useCallback} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {
  TitleHeader,
  Text,
  CategoryButtons,
  DealsCard,
  CategoryButtonProps,
} from '@components';
import {Icon} from '../components/Icon';
import {ICON_TYPE} from '../types';
import {ScrollView} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';

const [width, height] = [
  Dimensions.get('window').width,
  Dimensions.get('window').height,
];

const DealsScreen = () => {
  // Retrieve deals data from Redux (from app.deals)
  const popularDeals = useSelector(
    (state: RootState) => state.app.deals.popular,
  );
  const doublePointsDeals = useSelector(
    (state: RootState) => state.app.deals.doublePoints,
  );

  const TabButtons: CategoryButtonProps[] = [
    {svgName: 'Bookings', label: 'Bookings'},
    {svgName: 'Discover', label: 'Discover'},
    {svgName: 'Earn', label: 'Earn'},
  ];

  useFocusEffect(
    useCallback(() => {
      // This runs when the screen is focused
      StatusBar.setBackgroundColor('#FFFFFF');
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  return (
    <ScrollView
      style={[styles.container, {paddingTop: StatusBar.currentHeight}]}>
      <View style={{gap: 16, paddingBottom: 80}}>
        <TitleHeader />
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#85858B" />
          <TextInput
            placeholder={'Search'}
            placeholderTextColor="#85858B"
            style={styles.input}
          />
        </View>

        <CategoryButtons buttons={TabButtons} />
        <View
          style={{
            width: width,
            alignItems: 'center',
            justifyContent: 'center',
            height: 99,
          }}>
          <Image
            source={require('../assets/images/gift-img.png')}
            style={{width: width - 44, height: '130%', marginTop: -15}}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.popularContainer}>
          <Text style={styles.title}>Popular 🔥</Text>
          <FlatList
            data={popularDeals}
            keyExtractor={item => item.placeId}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({item, index}) => <DealsCard {...item} />}
          />
        </View>
        <View style={styles.popularContainer}>
          <View style={styles.row}>
            <Text style={styles.title}>Double Points</Text>
            <Icon name={'Token'} type={ICON_TYPE.SVG} />
          </View>
          <FlatList
            data={doublePointsDeals}
            keyExtractor={item => item.placeId}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({item, index}) => <DealsCard {...item} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 43,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '92%',
    height: 36,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 9,
    color: '#000',
    height: 100,
  },
  popularContainer: {
    paddingBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.26,
    color: '#000000',
    marginBottom: 16,
    paddingLeft: 18,
  },
  list: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 18,
  },
  row: {flexDirection: 'row'},
});
