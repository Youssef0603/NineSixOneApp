import React from 'react';
import { View, Image, TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import { Icon, Text } from '@components';
import { ICON_TYPE } from '../../types';

interface DealsCardProps {
  imageURL: string;
  title: string;
  type: string; // e.g., "Restaurant"
  subtype: string; // e.g., "Steakhouse"
  location: string;
  rating: number;
  placeId: string;
  offers: string[];
  isLiked: boolean;
  points: number;
  containerStyles?: ViewStyle
  width?: number,
  height?: number
}

export const DealsCard: React.FC<DealsCardProps> = ({
  imageURL,
  title,
  type,
  subtype,
  location,
  rating,
  offers,
  isLiked,
  points,
  placeId,
  containerStyles,
  width,
  height
}) => {

  return (
    <View style={[styles.card, containerStyles]}>
      <View>
        <Image source={{ uri: imageURL }} style={styles.image} />
        <View style={styles.overlay}>
          <View style={styles.pointsContainer}>
            <Icon name="Token" type={ICON_TYPE.SVG} size={20} />
            <Text style={styles.points}>{points} pts</Text>
          </View>
          <TouchableOpacity onPress={() =>{}} style={styles.likeButton} activeOpacity={0.75}>
            <Icon name={isLiked ? 'favorite' : 'favorite-border'} size={22} color={isLiked ? 'red' : 'grey'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.details}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={18} color={'#FF0000'} />
            <Text style={styles.rating}>{rating.toFixed(1)}</Text>
          </View>
        </View>
        <View style={styles.subtitleSection}>
          <View style={styles.metaContainer}>
            <Text style={styles.metaText}>{type}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaSubText}>{subtype}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Icon name="location-outline" size={12} color={'#6B7280'} family={ICON_TYPE.IONICONS} />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        {/* Offers */}
        <View style={styles.offersContainer}>
          {offers.slice(0, 2).map((offer, index) => (
            <View key={index} style={[styles.offerBadge]}>
              <Text style={styles.offerText}>{offer}</Text>
            </View>
          ))}
          {offers.length > 2 &&
            <View style={[styles.lastOffer]}>
              <Text style={styles.lastOfferText}>{'+1'}</Text>
            </View>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 325,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  overlay: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    padding: 6,
    borderWidth: 1,
    borderColor: '#B7B7B7',
    paddingHorizontal: 8,
  },
  points: {
    fontSize: 13,
    fontWeight: '500',
    color: '#646464',
    marginLeft: 1,
  },
  likeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(120, 120, 128, 0.2)',
  },
  details: {
    padding: 10,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  rating: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    marginLeft: 5,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  metaText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#theme.colors.grey',
  },
  dot: {
    fontSize: 10,
    fontWeight: '400',
    color: '#theme.colors.grey',
    marginHorizontal: 4,
  },
  metaSubText: {
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  location: {
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
    marginLeft: 4,
  },
  offersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  offerBadge: {
    backgroundColor: '#FF0E00',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
  },
  offerText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  lastOffer: {
    backgroundColor: '#FFE7E6',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  lastOfferText: {
    fontSize: 13,
    fontWeight: '600',
    color: 'black',
  },
});