import {StyleProp, ViewStyle} from 'react-native';
import { ICON_TYPE } from './enums';

export interface IconProps {
    name: string;
    type?: ICON_TYPE;
    size?: number;
    color?: string;
    testID?: string;
    onPress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    showRedDot?: boolean;
    showBackground?: boolean;
    family?: string;
  }