import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export const ReelLeftSection: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end', gap: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Image
          source={require('../../assets/images/961Logo.png')}
          style={{width: 30, height: 30}}
        />
        <Text style={styles.title}>961 News</Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
        <View style={styles.collabView}>
          <Text style={styles.collabText}>7 collab</Text>
        </View>
      </View>

      <Text style={styles.description}>
        A very long text that the user might write as a description here that takes
        up the entire line #fyp #961... Read more
      </Text>

      <View style={{backgroundColor: '#FFEBEC', height: 50, width: '90%'}}>
        <View style={styles.adBadge}>
          <Text style={styles.adBadgeText}>AD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  followButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  followText: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: '600',
  },
  collabView: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  collabText: {
    color: '#fff',
    fontSize: 14,
  },
  description: {
    color: '#fff',
    fontSize: 12,
  },
  adBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  adBadgeText: {
    fontSize: 8,
    color: '#808080',
  },
});

