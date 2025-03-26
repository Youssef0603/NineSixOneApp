import React, {FC} from 'react';
import {Image, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { IconProps } from '../types/components';
import { ICON_TYPE } from '../types/enums';
import * as Icons from '../assets/svgs';

const imageIcons = {
  //add image icons you need here like so
  //exampe: require('@assets/icons/png/example.png'),
};

export const Icon: FC<IconProps> = ({
  size,
  color,
  name,
  type,
  showRedDot,
  testID,
  containerStyle,
  onPress,
  showBackground,
  family,
}) => {
  const svgIconProps = {
    width: size,
    height: size,
    fill: 'currentColor',
    style: {color: color},
  };

  if (!name) return null;

  let children;
  if (type === ICON_TYPE.SVG) {
    children = Icons[name]?.(svgIconProps);
  } else if (type === ICON_TYPE.IMAGE) {
    children = (
      <Image
        source={imageIcons[name]}
        style={{
          width: size,
          height: size,
          resizeMode: 'cover',
        }}
      />
    );
  } else {
    children =
      family === 'ENTYPO' ? (
        <EntypoIcons
          testID={testID}
          size={size ?? 20}
          color={color ?? 'black'}
          name={name}
          onPress={onPress}
        />
      ) : family === 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons
          testID={testID}
          size={size ?? 20}
          color={color ?? 'black'}
          name={name}
          onPress={onPress}
        />
      ) : family === 'IONICONS' ? (
        <Ionicons
          testID={testID}
          size={size ?? 20}
          color={color ?? 'black'}
          name={name}
          onPress={onPress}
        />
      ) :  family === 'FontAwesome' ? (
        <FontAwesome
          testID={testID}
          size={size ?? 20}
          color={color ?? 'black'}
          name={name}
          onPress={onPress}
        />
      ) :(
        <MaterialIcons
          testID={testID}
          size={size ?? 20}
          color={color ?? 'black'}
          name={name}
          onPress={onPress}
        />
      );
  }

  return (
    <View>
      {showRedDot && (
        <View
          style={{
            backgroundColor: '#ff4d4d',
            width: 10,
            height: 10,
            zIndex: 10,
            borderRadius: 20,
            position: 'absolute',
            left: 35,
          }}
        />
      )}
      <View
        style={[
          showBackground && {
            backgroundColor: colors.backgroundAndSurfaces.primaryContainer,
            padding: 6,
            borderRadius: 9999,
          },
          containerStyle,
        ]}
        children={children}
      />
    </View>
  );
};
