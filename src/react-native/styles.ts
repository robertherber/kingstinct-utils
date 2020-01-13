import { StyleProp, ViewStyle } from 'react-native';

export const layer: StyleProp<ViewStyle> = {
  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
};

export const flexOne = {
  flex: 1,
};

export default {
  layer,
  flexOne,
};
