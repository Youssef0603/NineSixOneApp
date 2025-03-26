import React from 'react';
import { View, TouchableOpacity, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { Icon,Text } from '@components';
import { ICON_TYPE} from '@types';
import { IconProps } from 'src/types/components';

export interface CategoryButtonProps {
  svgName: string;
  label: string;
}

interface CategoryButtonsProps {
  buttons: CategoryButtonProps[];
  containerStyles?: ViewStyle;
  iconProps?: Partial<IconProps>;
  textStyles?: TextStyle;
}

export const CategoryButtons: React.FC<CategoryButtonsProps> = ({ buttons, containerStyles, iconProps, textStyles }) => {

  return (
    <View style={[styles.container, containerStyles]}>
      {buttons.map((button) => (
        <TouchableOpacity key={button.svgName} style={styles.button} activeOpacity={0.7}>
          <Icon name={button.svgName} {...iconProps} type={ICON_TYPE.SVG} size={30} />
          <Text style={[styles.label, textStyles]}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 35,
    width: '100%',
    height: 75,

  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: 98.25,
    height: 55,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'center',
    color: '#000',
  },
});