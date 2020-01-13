import React from 'react';
import { Image, ImageProps } from 'react-native';

export const getImageUri = (width: number, height: number): string => `https://picsum.photos/${width}/${height}`;

const ImageIpsum = ({ width, height, ...props }: ImageProps): React.ReactElement => (
  <Image
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    width={width}
    height={height}
    source={{ uri: getImageUri(width, height) }}
  />
);


export default ImageIpsum;
