import React, { useMemo } from 'react';
import { Text, TextProps } from 'react-native';
import { loremIpsum, ILoremIpsumParams } from 'lorem-ipsum';

type TextIpsumProps = TextProps & { loremOptions: ILoremIpsumParams };

const TextIpsum = ({ loremOptions, ...textProps }: TextIpsumProps): React.ReactElement => {
  const loremIpsumText = useMemo(() => loremIpsum(loremOptions), [loremOptions]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Text {...textProps}>{ loremIpsumText }</Text>;
};

export default TextIpsum;
