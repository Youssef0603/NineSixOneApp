import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from '@components';
import {ICON_TYPE} from '@types';

export const ReelActionBar: React.FC = () => {
  return (
    <View style={styles.rightIconsContainer}>
      <View style={{gap: 8}}>
        <View style={styles.dealsContainer}>
          <Image
            source={require('../../assets/images/AccountImage.png')}
            style={styles.accountImage}
          />
          <View style={styles.dealsBadge}>
            <Text style={styles.dealsBadgeText}>Deals</Text>
          </View>
        </View>
        <Text style={styles.dealsText}>Get deals here!</Text>
      </View>

      <View style={styles.iconWrapper}>
        <Icon name="favorite-border" size={24} color="#FFF" />
        <Text style={styles.iconLabel}>Like</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name="gift-outline" size={24} color="#FFF" family={ICON_TYPE.IONICONS} />
        <Text style={styles.iconLabel}>Gift</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name="commenting-o" size={24} color="#FFF" family={ICON_TYPE.FontAwesome} />
        <Text style={styles.iconLabel}>Comment</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name="send" size={24} color="#FFF" family={ICON_TYPE.FontAwesome} />
        <Text style={styles.iconLabel}>Share</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name="dots-three-horizontal" size={22} color="#FFF" family={ICON_TYPE.ENTYPO} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightIconsContainer: {
    alignItems: 'center',
    gap: 20,
    justifyContent: 'flex-end'
  },
  dealsContainer: {
    backgroundColor: 'white',
    height: 35,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    width: 46,
    alignItems: 'center',
    alignSelf: 'center',
  },
  accountImage: {
    resizeMode: 'cover',
    height: 33,
    width: 50,
  },
  dealsBadge: {
    position: 'absolute',
    top: -6,
    backgroundColor: '#FF0000',
    alignSelf: 'center',
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  dealsBadgeText: {
    fontSize: 8,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  dealsText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    gap: 7,
  },
  iconLabel: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default ReelActionBar;
