import {ViewStyle, TextStyle, ImageStyle} from 'react-native';

export interface SpecificStylesType {
  container: ViewStyle;
  purpleBox: ViewStyle;
  orangeBox: ViewStyle;
  blueBox: ViewStyle;
  [key: string]: ViewStyle | TextStyle | ImageStyle;
}
