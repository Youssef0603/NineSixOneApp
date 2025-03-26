import React, {FC} from 'react';
import {Text as NativeText, TextProps} from 'react-native';
import Fonts from 'src/constants/Fonts';
interface CustomText extends TextProps {
  translation?: string;
  maxFontSizeMultiplier?: number;  
}

export const Text: FC<CustomText> = props => {
  return (
    <NativeText
      {...props} 
      allowFontScaling={true}
      adjustsFontSizeToFit={props.adjustsFontSizeToFit ?? true}
      maxFontSizeMultiplier={props.maxFontSizeMultiplier ?? 1.1}
      minimumFontScale={0.7}
      style={[{color: '#000000', fontFamily: Fonts.regular}, props?.style]}
      children={props.children}
    />
  );
};
