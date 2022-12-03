import { FlatList, Platform, FlatListProps } from 'react-native';
import React, { memo } from 'react';

const HorizontalList = <T extends any>(props: FlatListProps<T>) => {
  return (
    <FlatList
      horizontal
      renderToHardwareTextureAndroid
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
      {...props}
    />
  );
};

export default memo(HorizontalList);
